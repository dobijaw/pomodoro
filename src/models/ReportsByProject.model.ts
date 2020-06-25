export interface Session {
  id: string;
  date: Date;
  actionTime: number;
  restTime: number;
}

export interface Project {
  id: string;
  count: number;
  sessions: Session[];
}

export type ProjectsList = Project[];
