import { ReportsTypes, Report } from './types';

export const addReport = (newReport: Report) => ({
  type: ReportsTypes.ADD_REPORT,
  payload: newReport,
});
