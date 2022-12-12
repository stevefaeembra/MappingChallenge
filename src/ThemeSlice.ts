import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { THEMES } from './components/mapping/ThemeSwitcher'
import type { RootState } from './store'

// Define a type for the slice state
interface ThemeState {
  currentTheme: THEMES,
}

// Define the initial state using that type
const initialState: ThemeState = {
  currentTheme: THEMES.LIGHT,
}

export const themeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeTheme: (state, action: PayloadAction<THEMES>) => {
      state.currentTheme = action.payload
    },
  },
})

export const { changeTheme } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default themeSlice.reducer
