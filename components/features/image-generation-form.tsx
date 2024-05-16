"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_PROMPTS } from "@/config/generation";
import { useImageGeneration } from "@/lib/hooks/use-images";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import { cn } from "@/lib/utils";
import { IconChat, IconRandomize, IconSpinner } from "@/components/icons";

interface ImageGenerationFormProps {
  buttonText: string;
  tooltipText: string;
}

export function ImageGenerationForm({
  buttonText,
  tooltipText,
}: ImageGenerationFormProps) {
  const { generateImage, isLoading } = useImageGeneration();
  const { formRef, onKeyDown } = useEnterSubmit();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const formSchema = z.object({
    prompt: z.string().min(2, {
      message: "Your prompt is too short",
    }),
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const promptValue = watch("prompt");

  const LEADING = 24;

  useEffect(() => {
    if (textareaRef.current && textareaRef.current.scrollHeight < LEADING * 4) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [promptValue]);

  const handleRandomizePrompt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomPrompt =
      DEFAULT_PROMPTS[Math.floor(Math.random() * DEFAULT_PROMPTS.length)];

    setValue("prompt", randomPrompt);
    if (textareaRef.current) {
      const event = new Event("input", { bubbles: true });
      textareaRef.current.value = randomPrompt;
      textareaRef.current.dispatchEvent(event);
    }
  };

  const onSubmit = (data: z.infer<typeof formSchema>) =>
    generateImage(data.prompt);

  return (
    <div className="max-w-xl w-full mx-auto px-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
        className="space-y-5"
      >
        <div className="relative flex w-full border border-border rounded-md">
          <Textarea
            onKeyDown={onKeyDown}
            ref={textareaRef}
            rows={1}
            onChange={(e) => setValue("prompt", e.target.value)}
            placeholder="Enter a prompt..."
            spellCheck={false}
            className={cn(
              "flex-grow min-h-full resize-none p-2 pr-10 focus-within:outline-none text-sm active:outline-none overflow-hidden h-auto leading-6"
            )}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-xl w-7 h-7 p-2"
                onClick={handleRandomizePrompt}
              >
                <IconRandomize className="w-4 h-4 text-secondary-foreground" />
                <span className="sr-only">{tooltipText}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{tooltipText}</TooltipContent>
          </Tooltip>
        </div>
        {errors.prompt && (
          <span className="text-red-600 text-sm">{errors.prompt.message}</span>
        )}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-baseline">
              Generating...&nbsp;
              <IconSpinner className="mr-2 animate-spin w-full h-4 m-auto" />
            </span>
          ) : (
            <span>{buttonText}</span>
          )}
        </Button>
      </form>
    </div>
  );
}
