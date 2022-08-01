import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthProvider {
    signup() { return { message: 'SIgnup succes' } }

    login() { return { message: 'Login success' } }

    logout() { return { message: 'logged out' } }

}