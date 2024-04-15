import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as action from "./reducer";
var baseUrl = "https://backend.halla.sa";
import axios from "axios";
function* SignUpWithEmail({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/sign-up",
      payload
    );
    console.log("Response", response?.data);

    if (response?.data?.accessToken) {
      yield put(
        action.Auth({
          token: response?.data?.accessToken,
          user: response?.data?.user,
          isLogin: true,
        })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({ islogin: true, data: response.data })
      );
      yield put(
        action.Message({
          message: "Sign Up Successfull",
          open: true,
          error: false,
          localMessage: "SignUp_Success",
        })
      );
    }
  } catch (error) {
    console.log("Errorrrrrrrrr", error?.response?.data?.message[0]);

    yield put(
      action.Message({
        message: error?.response?.data?.message[0] || "Something Went Wrong",
        open: true,
        error: true,
      })
    );
  }
}

function* SignUpWithPhone({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/sign-up/phone",
      payload
    );
    console.log("Response", response?.data);
    if (response?.data?.accessToken) {
      if (response?.data?.user?.otp) {
        yield put(
          action.Message({
            message: "OTP RECIEVED",
            open: false,
            error: false,
            localMessage: "Otp_Recieved",
          })
        );
        yield put(
          action.Otp({
            otp: response?.data?.user?.otp,
          })
        );
      }

      //   localStorage.setItem(
      //     "user",
      //     JSON.stringify({ islogin: true, data: response.data })
      //   );
      //   yield put(
      //     action.Message({
      //       message: "Sign Up Successfull",
      //       open: true,
      //       error: false,
      //       localMessage: "SignUp_Success",
      //     })
      //   );
    }
  } catch (error) {
    console.log("Errorrrrrrrrr", error?.response?.data?.message[0]);
    yield put(
      action.Message({
        message: error?.response?.data?.message[0] || "Something Went Wrong",
        open: true,
        error: true,
      })
    );
  }
}
function* LoginWithEmail({ payload }) {
  console.log("payload login", payload);
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/sign-in",
      payload
    );
    console.log("Response", response?.data);
    if (response?.data?.accessToken) {
      yield put(
        action.Auth({
          token: response?.data?.accessToken,
          user: response?.data?.user,
          isLogin: true,
        })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({ islogin: true, data: response.data })
      );
      yield put(
        action.Message({
          message: "Login Successfull",
          open: true,
          error: false,
          localMessage: "Login_Success",
        })
      );
    }
  } catch (error) {
    console.log("Errorrrrrrrrr", error?.response?.data?.message[0]);
    yield put(
      action.Message({
        message: error?.response?.data?.message[0] || "Something Went Wrong",
        open: true,
        error: true,
      })
    );
  }
}

function* VerifySignInOtp({ payload }) {
  console.log("payload otp", payload);
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/otp/verify",
      payload
    );
    console.log("Response", response?.data);
    if (response?.data?.accessToken) {
      yield put(
        action.Auth({
          token: response?.data?.accessToken,
          user: response?.data?.user,
          isLogin: true,
        })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({ islogin: true, data: response.data })
      );
      yield put(
        action.Message({
          message: "Login Successfull",
          open: true,
          error: false,
          localMessage: "Login_Success",
        })
      );
    }
  } catch (error) {
    console.log("Errorrrrrrrrr", error?.response?.data?.message[0]);
    yield put(
      action.Message({
        message: error?.response?.data?.message[0] || "Something Went Wrong",
        open: true,
        error: true,
      })
    );
  }
}
export default function* HomeSaga() {
  yield takeLatest("SIGN_UP_WITH_EMAIL", SignUpWithEmail);
  yield takeLatest("SIGN_UP_WITH_PHONE", SignUpWithPhone);
  yield takeLatest("LOGIN_WITH_EMAIL", LoginWithEmail);
  yield takeLatest("VERIFY_SIGNIN_OTP", VerifySignInOtp);
}
