"use client";

import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  BASEURL,
  DEFAULT_MESSAGE,
  DEFAULT_PROMPT_EMBEDDING,
  MAX_RETRIES,
  PROCESS_COMPLETION_PROGRESS_TIMEOUT,
  RETRY_TIMEOUT,
} from "@/config/generation";

interface ImageBatch {
  prompt: string;
  timestamp: number;
  batch: string[];
}

interface ImageGenerationContextType {
  images: ImageBatch[];
  message: string;
  progress: number;
  isLoading: boolean;
  isPending: boolean;
  generateImage: (prompt: string) => void;
  addImageBatch: (prompt: string, newImageArray: string[]) => void;
  clearImages: () => void;
}

const ImageGenerationContext = createContext<ImageGenerationContextType>({
  images: [],
  message: DEFAULT_MESSAGE,
  progress: 0,
  isLoading: false,
  isPending: false,
  generateImage: () => {},
  addImageBatch: () => {},
  clearImages: () => {},
});

export const ImageGenerationProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [images, setImages] = useState<ImageBatch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);
  const retriesRef = useRef<number>(0);
  const initalQueueSizeRef = useRef<number>(0);
  const currentQueuePositionRef = useRef<number>(0);
  const estimatedEtaRef = useRef<number>(0);
  const wsRef = useRef<WebSocket | null>(null);

  const getImages = useCallback(() => {
    const storedImages = localStorage.getItem("imageBatches");
    return storedImages ? (JSON.parse(storedImages) as ImageBatch[]) : [];
  }, []);

  const fetchImages = useCallback(() => {
    setIsPending(true);
    const images = getImages();
    setIsPending(false);
    setImages(images);
  }, [getImages]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const addImageBatch = useCallback(
    (prompt: string, newImageArray: string[]) => {
      const newBatch: ImageBatch = {
        prompt,
        timestamp: Date.now(),
        batch: newImageArray,
      };

      setImages((prevImages) => {
        const updatedImages = [...prevImages, newBatch].sort(
          (i1, i2) => i2.timestamp - i1.timestamp,
        );
        localStorage.setItem("imageBatches", JSON.stringify(updatedImages));
        return updatedImages;
      });
    },
    [],
  );

  const clearImages = useCallback(() => {
    setImages([]);
    localStorage.removeItem("imageBatches");
  }, []);

  const generateImage = useCallback(
    (prompt: string) => {
      setIsLoading(true);
      setProgress(0.1);
      setMessage("Initializing Connection...");
      retriesRef.current = 0;

      const initiateConnection = () => {
        if (wsRef.current) {
          wsRef.current.close();
        }

        wsRef.current = new WebSocket(BASEURL);
        wsRef.current.onopen = () => {
          if (retriesRef.current === 0)
            setMessage("Connected. Sending data...");
        };

        wsRef.current.onmessage = (event) => handleServerMessage(event);
        wsRef.current.onerror = handleError;
        wsRef.current.onclose = () => console.log("WebSocket closed.");
      };

      const handleServerMessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data) as SocketMessage;
        switch (data.msg) {
          case "send_hash":
            const sessionHash = Math.random().toString(36).substring(2);
            const sessionPayload = JSON.stringify({
              fn_index: 3,
              session_hash: sessionHash,
            });
            wsRef.current?.send(sessionPayload);
            break;
          case "send_data":
            const promptPayload = JSON.stringify({
              fn_index: 3,
              data: [
                prompt + DEFAULT_PROMPT_EMBEDDING,
                "",
                7.5,
                "Photographic",
              ],
            });
            wsRef.current?.send(promptPayload);
            break;
          case "estimation":
            if (data.rank && data.queue_size && data.avg_event_process_time) {
              if (
                initalQueueSizeRef.current === 0 &&
                data.queue_size !== initalQueueSizeRef.current
              )
                initalQueueSizeRef.current = data.queue_size;
              currentQueuePositionRef.current = data.rank;
              const queueProgress = (1 - data.rank / data.queue_size) * 50;
              const estimatedEta = data.avg_event_process_time;
              estimatedEtaRef.current = estimatedEta || estimatedEtaRef.current;

              setProgress(queueProgress);
              setMessage(
                `Queue Position ${data.rank}/${initalQueueSizeRef.current}`,
              );
            } else {
              if (progress > 0) setProgress(progress + 7.5);
              console.error("Invalid Estimation received. " + data);
            }
            break;
          case "process_starts":
            setProgress(50);
            setMessage("Generating Images...");
            updateProgressBasedOnEstimation(Date.now());
            break;
          case "process_completed":
            processCompletion(data);
            break;
          case "queue_full":
            retryOrAbort(
              `Queue is full. Retrying... (${retriesRef.current + 1})`,
            );
            break;
          default:
            setMessage("Unexpected server response.");
            setIsLoading(false);
            break;
        }
      };

      const processCompletion = (data: SocketMessage) => {
        if (data.success && data.output && data.output.data) {
          addImageBatch(prompt, data.output.data[0]);
          setMessage("Image generation successful!");
          setProgress(100);
        } else {
          setMessage(`Error: ${data.output?.error || "Unknown error"}`);
        }
        setIsLoading(false);
        setTimeout(() => setProgress(0), PROCESS_COMPLETION_PROGRESS_TIMEOUT);
      };

      const handleError = () => {
        retryOrAbort("WebSocket error. Are you connected to the internet?");
      };

      const retryOrAbort = (message: string) => {
        setMessage(message);
        if (retriesRef.current < MAX_RETRIES) {
          retriesRef.current += 1;
          setTimeout(initiateConnection, RETRY_TIMEOUT);
        } else {
          setMessage("Maximum retry attempts reached. Please try again later.");
          setIsLoading(false);
        }
      };

      const updateProgressBasedOnEstimation = (startTime: number) => {
        const estimatedEta = estimatedEtaRef.current;
        if (estimatedEta && estimatedEta > 0) {
          if (progress >= 90) return;

          const currentTime = Date.now();
          const elapsedTime = (currentTime - startTime) / 1000;
          if (elapsedTime >= estimatedEta) return;

          const timeProgress = (elapsedTime / estimatedEta) * 40;

          setProgress(50 + timeProgress);
          if (currentQueuePositionRef.current !== 0) {
            setMessage(
              `Queue Position ${currentQueuePositionRef.current--}/${
                initalQueueSizeRef.current
              }`,
            );
          } else {
            setMessage("Generating Images...");
          }

          const randomDelay = Math.random() * 500 + 500;
          setTimeout(
            () => updateProgressBasedOnEstimation(startTime),
            randomDelay,
          );
        }
      };

      initiateConnection();
    },
    [progress, addImageBatch, setIsLoading, setProgress, setMessage],
  );

  return (
    <ImageGenerationContext.Provider
      value={{
        images,
        progress,
        message,
        isLoading,
        isPending,
        generateImage,
        addImageBatch,
        clearImages,
      }}
    >
      {children}
    </ImageGenerationContext.Provider>
  );
};

export const useImageGeneration = () => useContext(ImageGenerationContext);
