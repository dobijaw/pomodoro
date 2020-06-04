export enum Reports {
  ADD_REPORT = 'ADD_REPORT',
}

export const addReport = (report: {}) => ({
  type: Reports.ADD_REPORT,
  payload: report,
});
