export interface Session {
  actionTime: number;
  restTime: number;
}

export interface Project {
  id: string;
  projectId: string;
  count: number;
  sessions: Session[];
}

export interface ProjectList {
  date: Date;
  projects: Project[];
}

export type Reports = ProjectList[];
