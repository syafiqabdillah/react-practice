import { ADD, REMOVE } from "./tonotdolist.types";

const INITIAL_STATE = {
  toNotDoList: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toNotDoList: state.toNotDoList.concat(action.payload),
      };
    case REMOVE:
      return {
        ...state,
        toNotDoList: state.toNotDoList.filter((item) => {
          return item !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
