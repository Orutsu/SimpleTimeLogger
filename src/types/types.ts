export type TimeLog = {
  name: string;
  description: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  notes: string[];
};
