import biodataReducer from "../reducer";
import { INITIAL_STATE } from "../reducer";
import { randomize } from "../actions";

describe('Biodata reducer', () => {
  it('returns the initial state', () => {
    expect(biodataReducer(undefined, {})).toMatchSnapshot();
  })

  it.skip('handles the randomize action', () => {
    expect(biodataReducer(INITIAL_STATE, randomize()))
  })
})