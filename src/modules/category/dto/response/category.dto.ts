import { ApiProperty } from '@nestjs/swagger';

import { AbstractDto } from '../../../../common/dto/abstract.dto';
import { Category } from '../../entities/category.entity';

export type CategoryDtoOptions = Partial<{
    isActive: boolean;
    isShowGeography: boolean;
}>;

export class CategoryDto extends AbstractDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    image: string;

    constructor(category: Category, options?: CategoryDtoOptions) {
        super(category);
        this.name = category.name;
        this.image = category.image;
    }
}
