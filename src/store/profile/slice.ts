import { createSlice } from '@reduxjs/toolkit'

interface I_UserSlice {
  isAuth: boolean
}

const initialState: I_UserSlice = {
  isAuth: false,
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    signIn(state) {
      state.isAuth = true
    },
    logout() {
      return initialState
    },
  },
})

export const profileActions = ProfileSlice.actions
