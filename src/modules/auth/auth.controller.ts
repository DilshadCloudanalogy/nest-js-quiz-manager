// auth.controller.ts

import { Controller, Post, Request, UseGuards,Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @UseGuards(LocalAuthGuard)

  @Post('login')

  async login(@Request() req) {    
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Request() req): Promise<any>  {
    return req.user
  }
}