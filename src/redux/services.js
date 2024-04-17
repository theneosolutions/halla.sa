import { axiosInstance } from "./auth";
var baseUrl = "https://backend.halla.sa";

async function ForgetPasswordEmailOtp(body) {
  console.log("body", body);
  try {
    const response = await axiosInstance.post(
      baseUrl + `/api/auth/forgot-password`,
      body
    );
    return response.data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "An error occurred";
    return message;
  }
}

async function ResetEmailPassword(body) {
  console.log("bodyddddd", body);
  try {
    const response = await axiosInstance.post(
      baseUrl + `/api/auth/reset-password`,
      body
    );
    return response.data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "An error occurred";
    return message;
  }
}
async function ForgetPasswordPhoneOtp(body) {
  console.log("body", body);
  try {
    const response = await axiosInstance.post(
      baseUrl + `/api/auth/otp/resend`,
      body
    );
    return response.data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "An error occurred";
    return message;
  }
}

async function ResetPhonePassword(body) {
  console.log("bodyddddd", body);
  try {
    const response = await axiosInstance.post(
      baseUrl + `/api/auth/reset-password/phone`,
      body
    );
    return response.data;
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "An error occurred";
    return message;
  }
}
export {
  ForgetPasswordEmailOtp,
  ResetEmailPassword,
  ForgetPasswordPhoneOtp,
  ResetPhonePassword,
};
