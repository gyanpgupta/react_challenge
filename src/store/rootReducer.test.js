import react from "react";
import rootReducer from "./rootReducer";

const defaultState = {
  apiResponse: null
}
describe('test case for reducer', () => {
  it('should have defaultState', () => expect(rootReducer(undefined, {})).toEqual(defaultState));

it('handles data request', () => {
  expect(rootReducer(defaultState, { type: "SET_DATA" })).toEqual({
    ...defaultState,
    apiResponse:undefined
  });
});
});


