import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import tonotdolistReducer from "./ToNotDoList/tonotdolist.reducer";
import biografiReducer from "./Biografi/biografi.reducer";
import dadJokesReducer from "./DadJokes/dadjokes.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  tonotdolist: tonotdolistReducer,
  biografi: biografiReducer,
  dadjokes: dadJokesReducer,
});

export default rootReducer;
