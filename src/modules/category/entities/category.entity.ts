import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { UseDto } from '../../../decorators';
import { CategoryDto, CategoryDtoOptions } from '../dto/response/category.dto';

@Entity()
@UseDto(CategoryDto)
export class Category extends AbstractEntity<CategoryDto, CategoryDtoOptions> {
    @Column({ unique: false, nullable: true })
    name: string;

    @Column({ nullable: true })
    image: string;
}
