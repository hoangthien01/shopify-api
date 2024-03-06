import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEmpty, IsNumber } from 'class-validator';

import { AbstractDto } from '../../../../common/dto/abstract.dto';
import { GenderType, RegisterType, UserRole } from '../../../../constants';
import { ToInt } from '../../../../decorators';
import type { User } from '../../entities';
import { GeographyLocationDto } from './geography-location.dto';

export type UserDtoOptions = Partial<{
    isActive: boolean;
    isShowGeography: boolean;
}>;

export class UserDto extends AbstractDto {
    @ApiProperty({ enum: UserRole })
    role: UserRole;

    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @IsNumber()
    @ToInt()
    @ApiProperty()
    identifier: number;

    @ApiProperty()
    gender: GenderType;

    @ApiProperty()
    address: string;

    @ApiProperty()
    avatar: string;

    @ApiProperty()
    job: string;

    @ApiProperty()
    hospitalId: string;

    @ApiProperty()
    birthday: Date;

    @ApiProperty()
    phone: number;

    @ApiProperty()
    donateCount: number;

    @ApiProperty()
    aBO: number;

    @ApiProperty()
    rh: number;

    @ApiProperty()
    isSubscription: boolean;

    @ApiProperty()
    isActive?: boolean;

    @ApiProperty()
    geography: GeographyLocationDto;

    @ApiProperty()
    registerType: RegisterType;

    @ApiProperty()
    lastLogin: Date;

    constructor(user: User, options?: UserDtoOptions) {
        super(user);
        this.role = user.role;
        this.email = user.email;
        this.name = user.name;
        this.phone = Number(user.phone);
        this.identifier = Number(user.identifier);
        this.isSubscription = user.isSubscription;
        this.registerType = user.registerType;
        this.isActive = options?.isActive;
        this.job = user.job;
        this.hospitalId = user.hospitalId;
        this.avatar = user.avatar;
        this.address = user.address;
        this.gender = user.gender;
        this.donateCount = user.donateCount;
        this.aBO = user.aBO;
        this.rh = user.rh;
        this.birthday = user.birthday;

        if (options?.isShowGeography) {
            this.geography = user.geography;
        }

        if (user.lastLogin) {
            this.lastLogin = user.lastLogin;
        }
    }
}
