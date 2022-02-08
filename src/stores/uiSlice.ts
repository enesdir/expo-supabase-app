import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ColorMode} from 'native-base';

type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Turkish';

interface UserState {
  color?: ColorMode;
  language: UILanguage;
}

const initialState: UserState = {
  color: 'dark',
  language: 'Turkish',
};

const ui = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAppearance: (state, action: PayloadAction<ColorMode>) => {
      state.color = action.payload;
    },
    setLanguage: (state, action: PayloadAction<UILanguage>) => {
      state.language = action.payload;
    },
  },
});

export const {setAppearance, setLanguage} = ui.actions;
// export const selectUser = (state: RootState) => state.user.user;
export default ui.reducer;
