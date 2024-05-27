import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { Profile } from '@profile/profile.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User, Profile])],
  exports: [UserService],
})
export class UsersModule {}
