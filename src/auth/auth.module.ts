import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  //   prisma folder එකෙන් export කරපු දෙ import මගින් ලබා ගන්නවා
  //   imports: [PrismaModule] --> prisma global කරපු නිසා import අවශ්‍ය නොවෙ,
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
