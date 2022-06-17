import { action, thunk, createStore, Thunk, Action } from 'easy-peasy';
import { User } from 'types/User';

interface UserModel {
  user: {};
  setUser: Action<UserModel, User>;
}

export const userStore = createStore<UserModel>({
  user: {},
  setUser: action((state, payload: User) => {
    state.user = { ...payload, isAuthenticated: true };
    console.log('sdsdwwwwwwf', { ...payload, isAuthenticated: true });
  }),
});
