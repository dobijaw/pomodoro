import { ReportsState, ReportActionTypes, ReportsTypes } from './types';

// {
//   date: new Date(2020, 5, 23),
//   projectId: 'PROJECT_123',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 45 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 23),
//   projectId: 'PROJECT_123',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 23),
//   projectId: 'PROJECT_12345',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 23),
//   projectId: 'PROJECT_12345',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 22),
//   projectId: 'PROJECT_1234567',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 22),
//   projectId: 'PROJECT_12345',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 22),
//   projectId: 'PROJECT_12345124',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 21),
//   projectId: 'PROJECT_123452324',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 21),
//   projectId: 'PROJECT_123452324',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 12),
//   projectId: 'PROJECT_123452324',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },
// {
//   date: new Date(2020, 5, 12),
//   projectId: 'PROJECT_123452324',
//   session: {
//     sessionId: `${Math.random() * Math.random()}`,
//     actionTime: 40 * 60 * 1000,
//     restTime: 5 * 60 * 1000,
//   },
// },

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
