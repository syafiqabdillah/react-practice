import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import tonotdolistReducer from "./ToNotDoList/tonotdolist.reducer";
import biodataReducer from "./Biodata/biodata.reducer";
import dadJokesReducer from "./DadJokes/dadjokes.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  tonotdolist: tonotdolistReducer,
  biodata: biodataReducer,
  dadjokes: dadJokesReducer,
});

export default rootReducer;
