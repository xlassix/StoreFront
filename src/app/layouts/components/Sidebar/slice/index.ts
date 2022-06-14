import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { SidebarState } from './types';

export const initialState: SidebarState = {
  show: false,
};

const slice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeSidebarVisibility(state) {
      state.show = !state.show;
    },
  },
});

export const { actions: sidebarActions } = slice;

export const useSidebarSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
