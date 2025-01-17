import { createSlice } from "@reduxjs/toolkit";
import HttpService from "../services/http-service";

const messageSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      userStatus: HttpService.LOADING,
      username: "",
      userId: "",
      isBabysitter: null,
    },
  },
  reducers: {
    logout(state) {
      state.user.userStatus = HttpService.LOGGED_OUT;
    },
    login(state, parameter) {
      state.user.username = parameter.payload.name;
      state.user.isBabysitter = parameter.payload.isBabysitter;
      state.user.userId = parameter.payload._id;
      state.user.userStatus = HttpService.LOGGED_IN;
    },
    defaultStat(state) {
      state.user.userStatus = HttpService.LOADING;
    },
    updateUsername(state, parameter) {
      state.user.username = parameter.payload;
    },
  },
});

export const { logout, login, defaultStat, updateUsername } =
  messageSlice.actions;
export default messageSlice.reducer;
