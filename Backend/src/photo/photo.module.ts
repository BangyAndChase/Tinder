import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { Profile } from '@profile/profile.entity';

@Module({
  controllers: [PhotoController],
  providers: [PhotoService],
  imports: [TypeOrmModule.forFeature([Photo, Profile])],
  exports: [PhotoService],
})
export class PhotoModule {}
