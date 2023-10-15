import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // d
import thunk from "redux-thunk";

import rootReducer from "./root/root.reducer";
import homeReducer from "./home/home.reducer";

export default function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(thunk, logger);

  const reducers = combineReducers({
    rootReducer,
    homeReducer,
  });
  const persistConfig = {
    key: "app",
    storage,
    blacklist: ["homeReducer"],
  };
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(
    persistedReducer,
    preloadedState,
    middlewareEnhancer
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
