import { DataSource, Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotoRepository extends Repository<Photo> {
  constructor(private dataSource: DataSource) {
    super(Photo, dataSource.createEntityManager());
  }
}
