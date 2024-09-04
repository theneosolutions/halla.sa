import { axiosInstance } from "./auth";
var baseUrl = "https://backendcode.halla.sa";

async function ForgetPasswordEmailOtp(body) {
  console.log("body", body);
  try {
    const response = await axiosInstance.post(
      baseUrl + `/auth/forgot-password`,
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
      baseUrl + `/auth/reset-password`,
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
      baseUrl + `/auth/otp/resend`,
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
      baseUrl + `/auth/reset-password/phone`,
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
