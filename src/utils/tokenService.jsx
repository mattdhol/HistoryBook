const STORAGE_KEY = 'token';

function setToken(token) {
  localStorage.setItem(STORAGE_KEY, token);
}

function getToken() {
  let token = localStorage.getItem(STORAGE_KEY);
  if (token) {
    // Check if expired, remove if it is
    const payload = JSON.parse(atob(token.split('.')[1]));
    // JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem(STORAGE_KEY);
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function removeToken() {
  localStorage.removeItem(STORAGE_KEY);
}

export default {
  setToken,
  getToken,
  getUserFromToken,
  removeToken,
};
