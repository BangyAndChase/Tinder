import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from 'src/photo/photo.entity';
import { ProfileController } from './profile.controller';
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileService, ProfileRepository],
  controllers: [ProfileController],
  imports: [TypeOrmModule.forFeature([Profile, Photo])],
})
export class ProfileModule {}
