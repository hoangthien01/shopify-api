import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities';
import {PageDto} from "../../common/dto";
import {CategoryPageOptionsDto, GetFilterCategoryDto} from "./dto";
import {CategoryDto} from "./dto/response/category.dto";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    async getCategories(dto: CategoryPageOptionsDto): Promise<PageDto<CategoryDto>> {
        const queryBuilder = this.categoryRepository.createQueryBuilder('category');
        const [items, pageMetaDto] = await queryBuilder.paginate(dto);

        return items.toPageResponseDto(pageMetaDto);
    }

    async filterCategories(dto: GetFilterCategoryDto): Promise<PageDto<CategoryDto>> {
        const queryBuilder = this.categoryRepository.createQueryBuilder('category')

        if (dto.searchKey) {
            queryBuilder.andWhere('category.name ILIKE :searchKey', { searchKey: `%${dto.searchKey}%` });
        }

        const [items, pageMetaDto] = await queryBuilder.paginate(dto);

        return items.toPageResponseDto(pageMetaDto, { isShowGeography: true });
    }
}
