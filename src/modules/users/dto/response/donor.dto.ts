import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmpty } from 'class-validator';

import { AbstractDto } from '../../../../common/dto';
import { HospitalDto } from '../../../../modules/hospital/dto';
import type { Donor } from '../../entities/donor.entity';
import { UserDto } from './user.dto';

export class DonorDto extends AbstractDto {
    @ApiProperty()
    donateCount: number;

    @ApiProperty()
    aBO: number;

    @ApiProperty()
    rh: number;

    @Type(() => UserDto)
    @IsEmpty()
    user: UserDto;

    @Type(() => HospitalDto)
    @IsEmpty()
    hospital: HospitalDto;

    constructor(donor: Donor) {
        super(donor);
        this.aBO = donor.aBO;
        this.rh = donor.rh;
        this.donateCount = donor.donateCount;
        this.user = donor.user?.toResponseDto();
        this.hospital = donor.hospital?.toResponseDto();
    }
}
