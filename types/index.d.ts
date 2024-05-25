type SocketMessage = {
  msg: string;
  rank?: number;
  success?: boolean;
  output?: {
    error?: string;
    data?: string[][];
  };
  avg_event_process_time?: number;
  queue_size?: number;
};

interface ImageBatch {
  prompt: string;
  timestamp: number;
  batch: string[];
}

interface AnimationComponent {
  id: number;
  component: JSX.Element;
}
