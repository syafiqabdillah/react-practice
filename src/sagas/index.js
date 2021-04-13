import dadJokeWatcher from "../components/DadJokes/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([dadJokeWatcher()]);
}
