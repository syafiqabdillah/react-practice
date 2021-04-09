import { ADD, REMOVE, TOGGLE_DONE } from "./tonotdolist.types"

export const addItem = (payload) => {
  return {
    type: ADD,
    payload: payload
  }
}

export const removeItem = (payload) => {
  return {
    type: REMOVE,
    payload: payload
  }
}

export const toggleDone = (payload) => {
  return {
    type: TOGGLE_DONE,
    payload: payload
  }
}