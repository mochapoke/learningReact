import ActionTypes from '../_actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    default:
      return state;
  }
};
