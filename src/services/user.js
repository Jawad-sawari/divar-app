import api from "../configs/api"
export const getProfile = async () => {
  const result = (await api.get("/user/whoami")) || false
  return result
}
