const defaultState = {
  apiResponse: null,
};

export default function (state = defaultState, action) {
  let shuffleSvg = action.payload;
  shuffleSvg = shuffleSvg && shuffleSvg.images.sort(() => Math.random() - 0.5);
  switch (action.type) {
    case "SET_DATA":
      return { ...state, apiResponse: shuffleSvg };
    default:
      return state;
  }
}
