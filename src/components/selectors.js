import { createSelector } from "reselect";

const selectBiodataDomain = (state) => state.biodata;

const makeSelectBiodata = () =>
  createSelector(selectBiodataDomain, (substate) => substate.toJS());

export default makeSelectBiodata;
export { selectBiodataDomain };
