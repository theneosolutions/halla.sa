import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as action from "./reducer";
var baseUrl = "https://backend.halla.sa";
import axios from "axios";

import { axiosInstance } from "./auth";

function* SignUpWithEmail({ payload }) {
  console.log("payload", payload);
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/sign-up",
      payload
    );
    console.log("Response", response?.data);

    if (response?.data?.id) {
      // yield put(
      //   action.Auth({
      //     token: response?.data?.accessToken,
      //     user: response?.data?.user,
      //     isLogin: true,
      //   })
      // );
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({ islogin: true, data: response.data })
      // );
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
    }
  } catch (error) {
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
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/sign-in",
      payload
    );
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
          localMessage: "Login_Success_EMAIL",
        })
      );
    }
  } catch (error) {
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

function* CreateEvent({ payload }) {
  const formData = new FormData();
  formData.append("file", payload.image);
  formData.append("fileType", "event");
  try {
    const response = yield call(
      axiosInstance.post,
      baseUrl + `/api/events/upload-event-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      }
    );
    var obj = {
      image: response?.data?.link,
      user: user()?.id,
    };
    var Object = { ...payload, ...obj };

    const response2 = yield call(
      axiosInstance.post,
      baseUrl + "/api/events",
      Object
    );
    console.log("Response", response2?.data);

    yield put(
      action.Message({
        message: "Event Created Successfully!",
        open: true,
        error: false,
        localMessage: "Event Created",
      })
    );
  } catch (error) {
    const message = error.response.data.message;
    yield put(action.Message({ message: message, open: true, error: true }));
  }
}

function* VerifySignInEmailOtp({ payload }) {
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/otp/verify/email",
      payload
    );
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
    yield put(
      action.Message({
        message: error?.response?.data?.message[0] || "Something Went Wrong",
        open: true,
        error: true,
      })
    );
  }
}

function* LoginWithPhone({ payload }) {
  try {
    const response = yield call(
      axios.post,
      baseUrl + "/api/auth/sign-in/phone",
      payload
    );
    yield put(
      action.Message({
        message: "Login Successfull",
        open: false,
        error: false,
        localMessage: "Login_Success_phone_otp",
      })
    );
  } catch (error) {
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
  yield takeLatest("LOGIN_WITH_PHONE", LoginWithPhone);

  yield takeLatest("VERIFY_SIGNIN_OTP", VerifySignInOtp);
  yield takeLatest("CREATE_EVENT", CreateEvent);

  yield takeLatest("VERIFY_SIGNIN_EMAIL_OTP", VerifySignInEmailOtp);
}

function user() {
  const storage = localStorage.getItem("user");
  if (storage) {
    const user = JSON.parse(storage);
    console.log("token", user?.data?.accessToken);
    if (user?.data?.accessToken) {
      return user?.data?.user;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
