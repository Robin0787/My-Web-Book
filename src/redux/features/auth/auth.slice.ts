import { RootState } from "@/redux/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialAuthState = {
  token: null | string;
};

const initialState: TInitialAuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   const { user, token } = action.payload;
    //   state.user = user;
    //   state.token = token;
    // },
    logOut: (state) => {
      state.token = null;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { logOut, setToken } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
// export const selectCurrentUser = (state: RootState) => state.auth.user;
// export const selectCurrentUserRole = (state: RootState) =>
//   state.auth.user?.role;
