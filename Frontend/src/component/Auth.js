class Auth{
    constructor(){
        this.Authenticated = false    
    }

    Login(cb){
        this.Authenticated = true
        cb()
    }

    Register(cb){
        this.Authenticated = true
        cb()
    }

    isAuthenticated(){
        return this.Authenticated
    }
    
}

export default new Auth()