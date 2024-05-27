import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async createPhoto(photoData: Partial<Photo>): Promise<Photo> {
    const photo = this.photoRepository.create(photoData);
    return this.photoRepository.save(photo);
  }

  async findAllPhotos(): Promise<Photo[]> {
    return this.photoRepository.find({ relations: ['profile'] });
  }

  async findPhotoById(id: number): Promise<Photo> {
    return this.photoRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
  }

  async updatePhoto(id: number, photoData: Partial<Photo>): Promise<Photo> {
    await this.photoRepository.update(id, photoData);
    return this.findPhotoById(id);
  }

  async deletePhoto(id: number): Promise<void> {
    await this.photoRepository.delete(id);
  }
}
