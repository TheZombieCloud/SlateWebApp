class AuthService {
    static isAuthenticated = true;
    
    constructor() {
        //autoAuth();

    }

    static autoAuth() {
        return;
    }

    createUser(userData) {

    }

    login(userData) {

    }

    static logout() {
        console.log(AuthService.isAuthenticated);
        AuthService.isAuthenticated = false;
        console.log(AuthService.isAuthenticated);
    }
}

export default AuthService;