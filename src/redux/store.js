import {createStore} from 'redux';
import userReducr from './reducer';

const store=createStore(userReducr);
export default store;