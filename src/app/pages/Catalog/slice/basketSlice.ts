import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { Basket } from 'types/Basket';
import { createSlice } from 'utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { basketSagas, catalogSagas } from './saga';
import { BasketState } from './types';

var InitialBasket: Basket = {
  id: '839RE434',
  buyerId: '29342JRFEDFNF',
  items: [],
};
// The initial state of the Homepage
export const initialState: BasketState = {
  baskets: InitialBasket,
};

const slice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.baskets = action.payload;
    },
    addItem(state, action) {
      const itemIndex = state.baskets?.items.findIndex(
        i => i.productId === action.payload.productId,
      );
      if (itemIndex === -1 || itemIndex === undefined) {
        state.baskets?.items.push(action.payload);
      } else {
        state.baskets!.items[itemIndex].quantity += action.payload.quantity;
      }
    },
    removeItem(state, action) {
      const { productId, quantity } = action.payload;
      const itemIndex = state.baskets?.items.findIndex(
        i => i.productId === productId,
      );
      if (itemIndex === -1 || itemIndex === undefined) return;
      state.baskets!.items[itemIndex].quantity -= quantity;
      if (state.baskets?.items[itemIndex].quantity === 0)
        state.baskets.items.splice(itemIndex, 1);
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: basketActions } = slice;

export const useBasketSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: basketSagas });
  return { actions: slice.actions };
};
