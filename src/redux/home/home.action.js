import { HOME_ACTIONS } from "./home.type"

export const actionShowModal = (data) => {
    return {
        type: HOME_ACTIONS.ACTION_SHOW_MODAL,
        payload: data,
    }
}
export const actionHideModal = () => {
  return {
    type: HOME_ACTIONS.ACTION_HIDE_MODAL,
  };
};