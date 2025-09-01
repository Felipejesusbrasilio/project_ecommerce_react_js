import {combineReducers} from 'redux';
import Store from '../redux/store';

const root = combineReducers({nome: Store});

export default root;