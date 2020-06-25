import { ReportsTypes, Report } from './types';

export const addReport = (newReport: Report) => ({
  type: ReportsTypes.ADD_REPORT,
  payload: newReport,
});

export const updateReport = (report: Report) => ({
  type: ReportsTypes.UPDATE_REPORT,
  payload: report,
});
