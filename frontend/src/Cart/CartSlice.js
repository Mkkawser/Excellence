import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  items: [],
  counts: {},
  products: {},
};

export const counterSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const { id, products } = action.payload;
      if (state.items.find((item) => item === id)) {
        state.counts[id]++;
      } else {
        state.items.push(id);
        state.counts[id] = 1;
        state.products[id] = products;
      }
      state.total += state.products[id].price;
    },
  },
});
export const { addTocart } = counterSlice.actions;

export default counterSlice.reducer;
