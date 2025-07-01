import api from "../configs/api"

export const sendOtp = async ({ mobile }) => {
  try {
    const response = await api.post("auth/send-otp", { mobile })
    return { response }
  } catch (error) {
    return { error }
  }
}
export const checkOtp = async ({ code, mobile }) => {
  try {
    const response = await api.post("auth/check-otp", { code, mobile })
    return { response }
  } catch (error) {
    return { error }
  }
}
