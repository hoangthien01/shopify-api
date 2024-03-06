import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GeographyLocation, SubscriptionTransaction, User } from './entities';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, SubscriptionTransaction, GeographyLocation]),
    ],
    controllers: [UsersController],
    exports: [UsersService, TypeOrmModule],
    providers: [UsersService]
})
export class UsersModule {}
