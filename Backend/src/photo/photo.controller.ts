import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  create(@Body() photoData: Partial<Photo>): Promise<Photo> {
    return this.photoService.createPhoto(photoData);
  }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAllPhotos();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Photo> {
    return this.photoService.findPhotoById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() photoData: Partial<Photo>,
  ): Promise<Photo> {
    return this.photoService.updatePhoto(id, photoData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.photoService.deletePhoto(id);
  }
}
