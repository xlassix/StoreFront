import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createSlice } from '../../../../../utils/@reduxjs/toolkit'; // Importing from `utils` makes them more type-safe ✅
import { UserState, User, UserInput } from '../../../../../types/User';
import { userSagas } from './saga';

// The initial state of the Homepage
export const initialState: UserState = {
  loading: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userAuth(state) {
      state.loading = true;
    },
    userLoaded(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */
export const { actions: userActions } = slice;

export const useUserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSagas });
  return { actions: slice.actions };
};
