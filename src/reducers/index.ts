import { combineReducers } from 'redux';
import reports from './reports';
import timer from './timer';

export default combineReducers({ reports, timer });
