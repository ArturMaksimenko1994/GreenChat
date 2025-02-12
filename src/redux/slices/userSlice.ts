import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number | null;
  username: string | null;
  name: string | null;
  email: string | null;
  description: string | null;
  nickname: string | null;
  registeredDate: string | null;
  avatarUrl: string | null;
}

const initialState: UserState = {
  id: null,
  username: null,
  name: null,
  email: null,
  description: null,
  nickname: null,
  registeredDate: null,
  avatarUrl: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.description = action.payload.description;
      state.nickname = action.payload.nickname;
      state.registeredDate = action.payload.registeredDate;
      state.avatarUrl = action.payload.avatarUrl;
    },
    clearUser: (state) => {
      Object.keys(state).forEach((key) => {
        (state as any)[key] = null;
      });
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
