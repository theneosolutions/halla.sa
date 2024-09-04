import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appState: "helo",
  user: null,
  token: null,
  isLogin: false,
  message: "",
  open: false,
  error: false,
  localMessage: "",
  otpSignup: null,
};

const Reducer = createSlice({
  name: "Halla",
  initialState,
  reducers: {
    Auth: (state, action) => {
      const { user, isLogin, token } = action.payload;
      state.isLogin = isLogin;
      state.user = user;
      state.token = token;
    },
    Message: (state, action) => {
      const { message, open, error, localMessage } = action.payload;
      state.message = message;
      state.open = open;
      state.error = error;
      state.localMessage = localMessage;
    },
    Otp: (state, action) => {
      const { otp } = action.payload;
      state.otpSignup = otp;
    },
  },
});
export const { Message, Auth, Otp } = Reducer.actions;
export default Reducer.reducer;
