import { ROOT_ACTIONS } from "./root.type";

export const actionAddCard = (card) => ({
    type: ROOT_ACTIONS.ACTION_ADD_CARD,
    payload: {
        card,
    },
});

export const actionEditCard = (card, index) => ({
    type: ROOT_ACTIONS.ACTION_EDIT_CARD,
    payload: {
        card,
        index,
    },
});

export const actionEditStatusCard = (enable, index) => ({
  type: ROOT_ACTIONS.ACTION_EDIT_STATUS_CARD,
  payload: {
    enable,
    index,
  },
});

export const actionDeleteCard = (index) => ({
    type: ROOT_ACTIONS.ACTION_DELETE_CARD,
    payload: {
        index,
    },
});

export const actionGenerateDummyCard = () => ({
    type: ROOT_ACTIONS.ACTION_GENERATE_DUMMY_CARDS,
});

export const actionDeleteAllCards = () => ({
    type: ROOT_ACTIONS.ACTION_DELETE_ALL_CARD,
})