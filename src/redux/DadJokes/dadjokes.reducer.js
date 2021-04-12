import {
  FETCH_DAD_JOKE,
  FETCH_DAD_JOKE_FAILED,
  FETCH_DAD_JOKE_SUCCESS,
} from "./dadjokes.types";

const INITIAL_STATE = {
  joke: "",
  loadingJoke: false,
  showJokeError: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DAD_JOKE:
      return {
        ...state,
        loadingJoke: true,
        joke: "",
        showJokeError: false,
      };
    case FETCH_DAD_JOKE_SUCCESS:
      return {
        ...state,
        loadingJoke: false,
        joke: action.joke
      }
    case FETCH_DAD_JOKE_FAILED:
      return {
        ...state,
        loadingJoke: false,
        showJokeError: true
      }
    default:
      return state;
  }
};

export default reducer;
