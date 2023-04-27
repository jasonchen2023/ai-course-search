
import { combineReducers } from '@reduxjs/toolkit';// eslint-disable-line import/no-extraneous-dependencies

import CountReducer from './count-reducer';

const rootReducer = combineReducers({
  count: CountReducer,
});

export default rootReducer;
