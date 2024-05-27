import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { Photo } from '../photo/photo.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async createProfile(
    profileData: Partial<Profile>,
    userId: number,
  ): Promise<Profile> {
    const profile = this.profileRepository.create(profileData);
    profile.user = { id: userId } as any;
    return this.profileRepository.save(profile);
  }

  async addPhoto(profileId: number, photoData: Partial<Photo>): Promise<Photo> {
    const profile = await this.profileRepository.findOne({
      where: { id: profileId },
    });
    const photo = this.photoRepository.create({ ...photoData, profile });
    return this.photoRepository.save(photo);
  }

  async findAllProfiles(): Promise<Profile[]> {
    return this.profileRepository.find({
      relations: ['photos', 'matches', 'user'],
    });
  }

  async findProfileById(id: number): Promise<Profile> {
    return this.profileRepository.findOne({
      where: { id },
      relations: ['photos', 'matches', 'user'],
    });
  }

  async updateProfile(
    id: number,
    profileData: Partial<Profile>,
  ): Promise<Profile> {
    await this.profileRepository.update(id, profileData);
    return this.findProfileById(id);
  }

  async deleteProfile(id: number): Promise<void> {
    await this.profileRepository.delete(id);
  }

  async addMatch(profileId: number, matchId: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({
      where: { id: profileId },
      relations: ['matches'],
    });
    const match = await this.profileRepository.findOne({
      where: { id: matchId },
    });
    profile.matches.push(match);
    await this.profileRepository.save(profile);
    return profile;
  }
}
