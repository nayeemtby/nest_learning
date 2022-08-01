import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthProvider } from "./auth.provider";

@Module({ controllers: [AuthController], providers: [AuthProvider] })
export class AuthModule {

}