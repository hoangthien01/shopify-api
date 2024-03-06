import { Column, Entity, ManyToMany } from 'typeorm';

import { AbstractEntity } from '../../../common/abstract.entity';
import { UseDto } from '../../../decorators';
import { ProductDto, ProductDtoOptions } from '../dto/response/product.dto';
import { Category } from '../../category/entities';

@Entity()
@UseDto(ProductDto)
export class Product extends AbstractEntity<ProductDto, ProductDtoOptions> {
    @Column({ unique: true, nullable: true })
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column({ unique: false, type: 'bigint', default: 0 })
    price: number;

    @Column({ nullable: true })
    image: string;

    @ManyToMany(() => Category, {
        cascade: true
    })
    categories: Category[];
}
