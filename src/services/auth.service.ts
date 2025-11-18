export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function setAuthToken(accessToken: string) {
  localStorage.setItem("authToken", accessToken);
}

export function removeAuthToken() {
  localStorage.removeItem("authToken");
}
