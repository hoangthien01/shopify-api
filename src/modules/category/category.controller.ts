import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {ApiAcceptedResponse, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';

import { CategoryService } from './category.service';
import {CategoryDto} from "./dto/response/category.dto";
import {GetFilterCategoryDto} from "./dto";
import {CreateCategoryDto} from "./dto/request/create-category.dto";
import {ResponseDto} from "../../common/dto";

@Controller('category')
@ApiTags('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter categories' })
    @ApiOkResponse({ type: CategoryDto })
    filterUsers(@Query() dto: GetFilterCategoryDto) {
        return this.categoryService.filterCategories(dto);
    }

    @Post('')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ResponseDto,
        description: 'Create category successfully'
    })
    @ApiOperation({ summary: 'Create category' })
    async createCategory(
        @Body() dto: CreateCategoryDto
    ) {
        const bloodUnit = await this.categoryService.createCategory(dto);

        return bloodUnit?.toResponseDto();
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiAcceptedResponse({
        type: ResponseDto,
        description: 'Delete category successfully'
    })
    @ApiOperation({ summary: 'Delete category' })
    deleteEventById(@Param('id') categoryId: string) {
        return this.categoryService.deleteCategory(categoryId);
    }
}
