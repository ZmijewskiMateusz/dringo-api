import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { RoomsGateway } from './rooms/rooms.gateway';
import { CategoriesModule } from './categories/categories.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    RoomsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
