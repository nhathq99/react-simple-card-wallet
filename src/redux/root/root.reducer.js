import { ROOT_ACTIONS } from "./root.type";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { generateShuffleDummyCards } from "../../utils/dummyData";

const initialState = {
  cards: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROOT_ACTIONS.ACTION_ADD_CARD: {
      const { card } = action.payload;
      return {
        ...state,
        cards: [card, ...state.cards],
      };
    }
    case ROOT_ACTIONS.ACTION_EDIT_CARD: {
      const { card, index } = action.payload;
      const cards = [...state.cards];
      cards[index] = card;
      return {
        ...state,
        cards,
      };
    }
    case ROOT_ACTIONS.ACTION_EDIT_STATUS_CARD: {
      const { enable, index } = action.payload;
      const cards = [...state.cards];
      cards[index].enable = enable;
      return {
        ...state,
        cards,
      };
    }
    case ROOT_ACTIONS.ACTION_DELETE_CARD: {
      const { index } = action.payload;
      const cards = [...state.cards];
      cards.splice(index, 1);
      return {
        ...state,
        cards,
      };
    }
    case ROOT_ACTIONS.ACTION_DELETE_ALL_CARD: {
      return {
        ...state,
        cards: [],
      };
    }
    case ROOT_ACTIONS.ACTION_GENERATE_DUMMY_CARDS: {
      const cards = generateShuffleDummyCards;
      return {
        ...state,
        cards: [...cards, ...state.cards],
      };
    }
    default:
      return state;
  }
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cards"],
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(persistConfig, rootReducer);
