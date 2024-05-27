import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Photo } from 'src/photo/photo.entity';
import { Profile } from '@profile/profile.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://vishnia:LrlvvWcpZiGxVmIe2C7Qtqx71FAcUOEY@dpg-cp6g4v3tg9os73a88psg-a.frankfurt-postgres.render.com/prod_l6o3?ssl=true',
  entities: [User, Profile, Photo],
  synchronize: true,
  ssl: false,
};
