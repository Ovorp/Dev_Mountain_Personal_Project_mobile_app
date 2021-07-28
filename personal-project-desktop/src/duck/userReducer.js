const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  phoneNumber: null,
  id: null,
  isLoggedIn: false,
};

const REG_USER_DATA = 'REG_USER_DATA';
const LOGOUT = 'LOGOUT';

export const registerUserData = (input) => {
  const data = input;

  return {
    type: REG_USER_DATA,
    payload: data,
  };
};

export const loggingOut = () => {
  return {
    type: LOGOUT,
    payload: {},
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${REG_USER_DATA}`:
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        id: payload.id,
        isLoggedIn: payload.isLoggedIn,
      };
    case `${LOGOUT}`: {
      return {
        ...state,
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        id: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
