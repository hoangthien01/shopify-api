import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { Gender, GenderType, RegisterMethod, RegisterType, UserRole } from '../../../constants';
import { UseDto } from '../../../decorators';
import type { UserDtoOptions } from '../dto/response/user.dto';
import { UserDto } from '../dto/response/user.dto';
import { GeographyLocation } from './geography-location.entity';
import { SubscriptionTransaction } from './subscription-transaction.entity';

@Entity()
@UseDto(UserDto)
export class User extends AbstractEntity<UserDto, UserDtoOptions> {
    @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
    role: UserRole;

    @Column({ unique: true, nullable: true })
    email: string;

    @Column({})
    name: string;

    @Column({ nullable: true, type: 'bigint' })
    phone: number;

    @Column({ unique: true, type: 'bigint', default: 1 })
    identifier: number;

    @Column({ nullable: true })
    password: string;

    @Column({ default: Gender.MALE })
    gender: GenderType;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    avatar: string;

    @Column({ nullable: true })
    job: string;

    @Column({ nullable: true })
    birthday: Date;

    @Column({ nullable: true })
    hospitalId: string;

    @Column({ nullable: true })
    donateCount: number;

    @Column({ nullable: true })
    aBO: number;

    @Column({ nullable: true })
    rh: number;

    @Column({ default: RegisterMethod.REGISTER })
    registerType: RegisterType;

    @Column({ default: false })
    isSubscription: boolean;

    @Column({ default: true })
    isEmailRegistered: boolean;

    @Column({ default: true })
    isPhoneRegistered: boolean;

    @Column({ nullable: true })
    invitationToken: string;

    @OneToMany(() => SubscriptionTransaction, (subscription) => subscription.user, {
        cascade: true
    })
    subscription: SubscriptionTransaction[];

    @OneToOne(() => GeographyLocation, (geographyLocation) => geographyLocation.user, {
        cascade: true
    })
    geography: GeographyLocation;

    @Column({ type: 'timestamptz', nullable: true })
    lastLogin: Date;
}
