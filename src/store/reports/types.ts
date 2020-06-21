export interface Report {
  date: string;
  project: string;
  session: {
    actionTime: number;
    restTime: number;
  };
}

export interface ReportsState {
  reports: Report[];
}
