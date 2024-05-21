import { DataSource, Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileRepository extends Repository<Profile> {
  constructor(private dataSource: DataSource) {
    super(Profile, dataSource.createEntityManager());
  }
}
