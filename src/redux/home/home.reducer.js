import { HOME_ACTIONS } from "./home.type";

const initialState = {
  isOpenModal: false,
  data: {},
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.ACTION_SHOW_MODAL:
      return {
        ...state,
        isOpenModal: true,
        data: action.payload,
      };
    case HOME_ACTIONS.ACTION_HIDE_MODAL:
      return {
        ...state,
        isOpenModal: false,
        data: {},
      };
    default:
      return state;
  }
};

export default homeReducer;
