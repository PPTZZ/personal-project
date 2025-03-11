import type { TProducts, RootState, TUsers } from "../definitions";

// Products selectors
export const selectProducts = (state: RootState): TProducts[] =>
  state.products?.products;
export const selectLimitedBannedProducts = (state: RootState): TProducts[] =>
  state.products?.bannedProducts;

// Entry selectors
export const selectEntries = (state: RootState) => {
  state.entries.entriesList;
};
