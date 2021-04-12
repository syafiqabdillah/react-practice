import { put, all, takeLatest, call } from 'redux-saga/effects';
import { FETCH_DAD_JOKE, FETCH_DAD_JOKE_FAILED, FETCH_DAD_JOKE_SUCCESS } from "../redux/DadJokes/dadjokes.types";

// Imitating Justika's request function 
function request(URL, header) {
  return fetch(URL, header).then(res => res.json()).then(data => data.joke)
}

function* fetchDadJoke() {
  const header = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  }
  const URL = "https://icanhazdadjoke.com/"
  try {
    const joke = yield call(request, URL, header)
    yield put({ type: FETCH_DAD_JOKE_SUCCESS, joke: joke })
  } catch(err) {
    yield put({ type: FETCH_DAD_JOKE_FAILED, err })
  }
}

function* dadJokeWatcher() {
  yield takeLatest(FETCH_DAD_JOKE, fetchDadJoke)
}

export default function* rootSaga() {
  yield all([
    dadJokeWatcher()
  ])
}