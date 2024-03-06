import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

import { AbstractDto } from '../../../../common/dto/abstract.dto';
import { ToInt } from '../../../../decorators';
import {Product} from "../../entities";

export type ProductDtoOptions = Partial<{
    isActive: boolean;
    isShowGeography: boolean;
}>;

export class ProductDto extends AbstractDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @IsNumber()
    @ToInt()
    @ApiProperty()
    price: number;

    @ApiProperty()
    image: string;

    constructor(product: Product, options?: ProductDtoOptions) {
        super(product);
    }
}
