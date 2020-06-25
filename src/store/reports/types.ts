export interface Report {
  date: Date;
  projectId: string;
  session: {
    sessionId: string;
    actionTime: number;
    restTime: number;
  };
}

export interface ReportsState {
  reports: Report[];
}

export enum ReportsTypes {
  ADD_REPORT = 'ADD_REPORT',
  UPDATE_REPORT = 'UPDATE_REPORT',
}

export interface AddReportAction {
  type: typeof ReportsTypes.ADD_REPORT;
  payload: Report;
}

export interface UpdateReportAction {
  type: typeof ReportsTypes.UPDATE_REPORT;
  payload: Report;
}

export type ReportActionTypes = AddReportAction | UpdateReportAction;
