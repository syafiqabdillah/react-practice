import { ADD, REMOVE, TOGGLE_DONE } from "./tonotdolist.types";

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
    case TOGGLE_DONE:
      const newList = state.toNotDoList.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
      return {
        ...state,
        toNotDoList: newList
      }
    default:
      return state;
  }
};

export default reducer;
