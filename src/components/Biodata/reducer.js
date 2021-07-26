import { RANDOMIZE } from "./constants";
import { fromJS } from "immutable";

export const INITIAL_STATE = fromJS({
  currentPerson: {},
  theme: "blue",
  persons: [
    {
      fullname: "Craig Berry",
      age: 23,
      address: "(307) 325-9260 200 Columbia St Hanna, Wyoming(WY), 82327",
      src: "images/person1.jpg",
    },
    {
      fullname: "Lonnie Lamb",
      age: 43,
      address: "(251) 649-4744 1113 N Way Dr Semmes, Alabama(AL), 36575",
      src: "images/person2.jpg",
    },
    {
      fullname: "Hadwin Rose",
      age: 36,
      address: "(757) 868-7824 16 N Valasia Rd Poquoson, Virginia(VA), 23662",
      src: "images/person3.jpg",
    },
    {
      fullname: "Alison Pierce",
      age: 20,
      address:
        "(410) 943-4688 3526 Indian Grant Rd East New Market, Maryland(MD), 21631",
      src: "images/person4.jpg",
    },
    {
      fullname: "Vania Burrows",
      age: 32,
      address: "(574) 936-5266 10899 Olive Trl Plymouth, Indiana(IN), 46563",
      src: "images/person5.jpg",
    },
  ],
});

function samePerson(currentPerson, newPerson) {
  if (currentPerson) {
    return currentPerson.get("fullname") === newPerson.get("fullname");
  }
  return false;
}

function getOneItem(array) {
  return array.get(Math.floor(Math.random() * array.size));
}

function getRandomPerson() {
  const persons = INITIAL_STATE.get("persons");
  let newPerson = getOneItem(persons);
  return newPerson;
}

function biodataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RANDOMIZE:
      let newPerson = getRandomPerson();
      const currentPerson = state.get("currentPerson");
      const theme = state.get("theme");
      while (samePerson(currentPerson, newPerson)) {
        newPerson = getRandomPerson();
      }
      return state
        .set("currentPerson", newPerson)
        .set("theme", theme === "blue" ? "red" : "blue");
    default:
      return state;
  }
}

export default biodataReducer;
