import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
import { Photo } from '../photo/photo.entity';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(
    @Body() profileData: Partial<Profile>,
    @Body() userId: number,
  ): Promise<Profile> {
    return this.profileService.createProfile(profileData, userId);
  }

  @Post(':id/photos')
  addPhoto(
    @Param('id') id: number,
    @Body() photoData: Partial<Photo>,
  ): Promise<Photo> {
    return this.profileService.addPhoto(id, photoData);
  }

  @Get()
  findAll(): Promise<Profile[]> {
    return this.profileService.findAllProfiles();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Profile> {
    return this.profileService.findProfileById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() profileData: Partial<Profile>,
  ): Promise<Profile> {
    return this.profileService.updateProfile(id, profileData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.profileService.deleteProfile(id);
  }

  @Patch(':id/match/:matchId')
  addMatch(
    @Param('id') id: number,
    @Param('matchId') matchId: number,
  ): Promise<Profile> {
    return this.profileService.addMatch(id, matchId);
  }
}
