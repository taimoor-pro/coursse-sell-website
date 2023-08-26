import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "./slices/RegistrationSlice";
import LoginSlice from "./slices/LoginSlice";
import TodoSlice from "./slices/TodoSlice";

// Persisit
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfigRegis = {
  key: "addRegisterUser",
  version: 1,
  storage,
};

const reducer = combineReducers({
  addRegisterUser: RegistrationSlice,
  addLoginUser: LoginSlice,
  todoUsers: TodoSlice,
});

const persistedReducer = persistReducer(persistConfigRegis, reducer);

export const store = configureStore({
  // with Persist
  reducer: persistedReducer,
});
