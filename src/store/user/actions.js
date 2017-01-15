export const LOGIN = 'user.LOGIN_USER';
export const LOGOUT = 'user.LOGOUT_USER';

export function login(email) {
  return { type: LOGIN, email};
}

export function logout() {
  return { type: LOGOUT };
}
