// imports web token decoder
import decode from 'jwt-decode';
// adds a class called AuthService
class AuthService {
   getProfile() {
      return decode(this.getToken());
   }
   loggedIn() {
      const token = this.getToken();
      return token && !this.isTokenExpired(token) ? true : false;
   }
   isTokenExpired(token) {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
         localStorage.removeItem('id_token');
         return true;
      }
      return false;
   }
   getToken() {
      return localStorage.getItem('id_token');
   }
   login(idToken) {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/play');
   }
   logout() {
      localStorage.removeItem('id_token');
      window.location.reload();
   }
}
// exports class AuthService
export default new AuthService();
