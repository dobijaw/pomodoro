import { ReportsState, ReportActionTypes, ReportsTypes } from './types';

const initialState: ReportsState = {
  reports: [],
};

export function reportReducer(state = initialState, action: ReportActionTypes) {
  switch (action.type) {
    case ReportsTypes.ADD_REPORT:
      return {
        ...state,
        reports: [...state.reports, action.payload],
      };
    case ReportsTypes.UPDATE_REPORT:
      return {
        ...state,
        reports: [
          ...state.reports.map((i) =>
            i.session.sessionId === action.payload.session.sessionId
              ? action.payload
              : i
          ),
        ],
      };
    default:
      return state;
  }
}
