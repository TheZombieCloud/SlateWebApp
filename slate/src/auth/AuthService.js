class AuthService {
    
    constructor() {
        
        this.state = {isAuthenticated: false}
    }

    createUser(userData) {

    }

    login(userData) {

    }

    logout() {
        AuthService.isAuthenticated = false;
    }
}

export default AuthService;