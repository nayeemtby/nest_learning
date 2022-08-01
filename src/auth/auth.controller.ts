import { Controller, Get, Post } from "@nestjs/common";
import { AuthProvider } from "./auth.provider";

@Controller(

)
export class AuthController {
    constructor(private authProvider: AuthProvider) { }

    @Post('signup')
    handleSignup() { return this.authProvider.signup() }

    @Post('login')
    handleLogin() { return this.authProvider.login() }

    @Get('logout')
    handleLogout() { return this.authProvider.logout() }
}