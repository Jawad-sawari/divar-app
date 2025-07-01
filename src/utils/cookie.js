export const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=${
    1 * 24 * 60 * 60
  }`
  document.cookie = `refreshToken=${tokens.accessToken}; max-age=${
    30 * 24 * 60 * 60
  }`
}

export const getCookie = (cookieName) => {
  const cookie = document.cookie
    .split(";")
    .find((token) => token.trim().startsWith(cookieName))
    ?.split("=")[1]
  return cookie
}
