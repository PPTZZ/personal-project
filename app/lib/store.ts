import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./features/products/productsSlice";

import { userReducer } from "./features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      user:userReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
