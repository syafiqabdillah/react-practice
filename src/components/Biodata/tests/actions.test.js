import { randomize } from "../actions";
import { RANDOMIZE } from "../constants";

describe('Biodata actions', () => {
  describe('randomize', () => {
    it('returns the corrent constant', () => {
      expect(randomize()).toEqual({ type: RANDOMIZE })
    })
  })
})