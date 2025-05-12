export const decodeJWT = (jwt: string) => {
  if (jwt) {
    const arrayToken = jwt.split('.');
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    return tokenPayload;
  }
};
