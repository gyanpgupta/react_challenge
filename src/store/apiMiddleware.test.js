import react from "react";

const action = {
  type:''
}
describe('test for api Middleware', () => {
  it('handles data request', () => {
    expect((action, { type: "" })).toEqual({
      ...action
    });
  });
})

