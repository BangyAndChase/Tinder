import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './Config/typeorm';
import { ProfileModule } from './Profile/profile.module';
import { UsersModule } from './Users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    UsersModule,
    ProfileModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
