import { ReportsState, ReportActionTypes, ReportsTypes } from './types';

const initialState: ReportsState = {
  reports: [],
};

export function reportReducer(state = initialState, action: ReportActionTypes) {
  switch (action.type) {
    case ReportsTypes.ADD_REPORT:
      return [...state.reports, action.payload];
    default:
      return state;
  }
}
