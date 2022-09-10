import { combineReducers } from 'redux';
import startWarsReducer from './starWars/startWars.reducer';

const rootReducer = combineReducers({
    starWars: startWarsReducer,
});

export default rootReducer;