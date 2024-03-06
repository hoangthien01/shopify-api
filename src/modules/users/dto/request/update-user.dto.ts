import { IsNumber, IsOptional, IsString } from 'class-validator';

import { GenderType } from '../../../../constants';
import { DateField, NumberField, NumberFieldOptional, StringFieldOptional } from '../../../../decorators';

export class UpdateUserDto {
    @StringFieldOptional()
    name?: string;

    @NumberField()
    identifier?: number;

    @IsOptional()
    @IsString()
    job?: string;

    @DateField()
    @IsOptional()
    birthday?: Date;

    @NumberFieldOptional()
    gender?: GenderType;

    @StringFieldOptional()
    email?: string;

    @IsOptional()
    @IsNumber()
    phone?: number;

    @IsOptional()
    @IsString()
    address?: string;
}
