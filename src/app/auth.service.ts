export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
