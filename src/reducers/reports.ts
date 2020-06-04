import { Reports } from 'actions/reports';

function reports(state = [], action: { type: string; payload: Object }) {
  switch (action.type) {
    case Reports.ADD_REPORT:
      return [action.payload, ...state];
    default:
      return state;
  }
}

export default reports;
