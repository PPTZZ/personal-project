import type { RootState, TProducts } from "../definitions";

// Products selectors
export const selectProducts = (state: RootState): TProducts[] =>
  state.products?.products;
export const selectLimitedBannedProducts = (state: RootState): TProducts[] =>
  state.products?.bannedProducts;
