import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/products/productsSlice";

import { userReducer } from "./features/user/userSlice";
import { entryReducer } from "./features/entries/entriesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      user: userReducer,
      entries: entryReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
