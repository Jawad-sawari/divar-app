import api from "../configs/api"
import { getCookie } from "../utils/cookie"

export const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken")
  if (!refreshToken) return
  try {
    const response = await api.post("/auth/check-refresh-token", {
      refreshToken,
    })
    return response
  } catch (error) {
    error
  }
}
