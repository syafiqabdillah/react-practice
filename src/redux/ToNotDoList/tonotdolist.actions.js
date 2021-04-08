import { ADD, REMOVE } from "./tonotdolist.types"

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