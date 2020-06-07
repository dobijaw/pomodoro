import { combineReducers } from 'redux';
import projects from './projects';
import reports from './reports';
import timer from './timer';

export default combineReducers({ reports, timer, projects });
