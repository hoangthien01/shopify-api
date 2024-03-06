import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {ApiAcceptedResponse, ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';

import { ProductService } from './product.service';
import {CategoryDto} from "../category/dto/response/category.dto";
import {GetFilterCategoryDto} from "../category/dto";
import {ResponseDto} from "../../common/dto";
import {CreateCategoryDto} from "../category/dto/request/create-category.dto";
import {CreateProductDto} from "./dto/request/create-product.dto";
import {GetFilterProductDto, ProductDto} from "./dto";
@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter products' })
    @ApiOkResponse({ type: ProductDto })
    filterUsers(@Query() dto: GetFilterProductDto) {
        return this.productService.filterProducts(dto);
    }

    @Post('')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ResponseDto,
        description: 'Create product successfully'
    })
    @ApiOperation({ summary: 'Create product' })
    async createCategory(
        @Body() dto: CreateProductDto
    ) {
        const bloodUnit = await this.productService.createProduct(dto);

        return bloodUnit?.toResponseDto();
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiAcceptedResponse({
        type: ResponseDto,
        description: 'Delete product successfully'
    })
    @ApiOperation({ summary: 'Delete product' })
    deleteEventById(@Param('id') productId: string) {
        return this.productService.deleteProduct(productId);
    }
}
