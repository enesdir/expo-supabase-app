import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Session} from '@supabase/supabase-js';
import {Profile} from '../types/Profile';
export type User = {
  uid: string;
};
interface UserState {
  profile?: Profile | null;
  session: Session | null;
  loading: boolean;
  user: User | null;
}

const initialState: UserState = {
  profile: null,
  loading: true,
  session: null,
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
      state.loading = false;
    },
    clearUser: state => {
      state.session = null;
      state.profile = initialState.profile;
      state.user = initialState.user;
      state.loading = false;
    },
  },
});

export const {setUser, setProfile, clearUser} = user.actions;
// export const selectUser = (state: RootState) => state.user.user;
export default user.reducer;
