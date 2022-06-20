import { action, thunk, createStore, Thunk, Action } from 'easy-peasy';
import { User } from 'types/User';
import { EntityStore } from 'types/EntityStore';

interface UserModel {
  user: {};
  selectedStore: {};
  search: string | null;
  setUser: Action<UserModel, User>;
  setSelectStore: Action<UserModel, EntityStore>;
  setSearch: Action<UserModel, string>;
}

export const userStore = createStore<UserModel>({
  user: {},
  selectedStore: {},
  search: '',
  setUser: action((state, payload: User) => {
    state.user = { ...payload, isAuthenticated: true };
  }),
  setSelectStore: action((state, payload: EntityStore) => {
    state.selectedStore = payload;
  }),
  setSearch: action((state, payload: string) => {
    state.search = payload;
  }),
});
