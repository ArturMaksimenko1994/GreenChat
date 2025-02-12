import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  idInstance: string | null;
  apiTokenInstance: string | null;
}

const initialState: AuthState = {
  idInstance: localStorage.getItem("idInstance") || null,
  apiTokenInstance: localStorage.getItem("apiTokenInstance") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<{ idInstance: string; apiTokenInstance: string }>) => {
      state.idInstance = action.payload.idInstance;
      state.apiTokenInstance = action.payload.apiTokenInstance;

      localStorage.setItem("idInstance", action.payload.idInstance);
      localStorage.setItem("apiTokenInstance", action.payload.apiTokenInstance);
    },
    clearAuthData: (state) => {
      state.idInstance = null;
      state.apiTokenInstance = null;

      localStorage.removeItem("idInstance");
      localStorage.removeItem("apiTokenInstance");
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
