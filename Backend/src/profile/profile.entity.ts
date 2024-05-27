import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Photo } from '../photo/photo.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  bio: string;

  @Column()
  gender: string;

  @Column()
  lookingFor: string;

  @Column({ nullable: true })
  profilePicture: string;

  @OneToMany(() => Photo, (photo) => photo.profile, { cascade: true })
  photos: Photo[];

  @Column('jsonb', { nullable: true })
  location: {
    type: string;
    coordinates: number[];
  };

  @Column()
  distancePreference: number;

  @Column()
  ageRangePreference: string;

  @Column({ default: true })
  showMeOnTinder: boolean;

  @Column({ default: 0 })
  likesGiven: number;

  @Column({ default: 0 })
  likesReceived: number;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => Profile)
  @JoinTable()
  matches: Profile[];

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}
