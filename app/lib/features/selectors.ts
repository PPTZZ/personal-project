import type { TProducts, RootState } from "../definitions";

// Products selectors
export const selectProducts = (state: RootState): TProducts[] =>
  state.products?.products;
export const selectLimitedBannedProducts = (state: RootState): TProducts[] =>
  state.products?.bannedProducts;

// User selectors
export const selectIsLoggedIn = (state: RootState) => {
 return state.user?.isLoggedIn;
};
