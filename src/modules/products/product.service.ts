import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities';
import {CategoryPageOptionsDto, GetFilterCategoryDto} from "../category/dto";
import {PageDto, ResponseDto} from "../../common/dto";
import {CategoryDto} from "../category/dto/response/category.dto";
import {CreateCategoryDto} from "../category/dto/request/create-category.dto";
import {Category} from "../category/entities";
import {CreateProductDto} from "./dto/request/create-product.dto";
import {GetFilterProductDto, ProductDto, ProductPageOptionsDto} from "./dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {}

    async getProducts(dto: ProductPageOptionsDto): Promise<PageDto<ProductDto>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product');
        const [items, pageMetaDto] = await queryBuilder.paginate(dto);

        return items.toPageResponseDto(pageMetaDto);
    }

    async filterProducts(dto: GetFilterProductDto): Promise<PageDto<ProductDto>> {
        const queryBuilder = this.productRepository.createQueryBuilder('product')

        if (dto.searchKey) {
            queryBuilder.andWhere('product.title ILIKE :searchKey', { searchKey: `%${dto.searchKey}%` });
        }

        const [items, pageMetaDto] = await queryBuilder.paginate(dto);

        return items.toPageResponseDto(pageMetaDto, { isShowGeography: true });
    }

    async createProduct(
        dto: CreateProductDto,
    ): Promise<Product | undefined> {
        const productEntity = this.productRepository.create(dto);
        return this.productRepository.save(productEntity);
    }

    async deleteProduct(productId: string): Promise<ResponseDto> {
        await this.productRepository.softDelete(productId);

        return new ResponseDto({ message: 'delete product successfully!' });
    }
}
