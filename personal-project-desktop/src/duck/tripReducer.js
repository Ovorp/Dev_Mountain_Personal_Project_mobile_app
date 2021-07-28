const initialState = [];

const LOAD_DATA_TO_STORE = `LOAD_DATA_TO_STORE`;

export const loadDataToStore = (input) => {
  console.log(input);
  return {
    type: LOAD_DATA_TO_STORE,
    payload: input,
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_DATA_TO_STORE}`:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default reducer;
