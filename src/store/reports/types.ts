export interface Report {
  date: Date;
  project: string;
  session: {
    actionTime: number;
    restTime: number;
  };
}

export interface ReportsState {
  reports: Report[];
}

export enum ReportsTypes {
  ADD_REPORT = 'ADD_REPORT',
}

export interface AddReportAction {
  type: typeof ReportsTypes.ADD_REPORT;
  payload: Report;
}

export type ReportActionTypes = AddReportAction;
