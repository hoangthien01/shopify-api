import {Controller, Get, HttpCode, HttpStatus, Query} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiTags} from '@nestjs/swagger';

import { CategoryService } from './category.service';
import {Auth} from "../../decorators";
import {UserRole} from "../../constants";
import {GetFilterUserDto, UserDto} from "../users/dto";
import {CategoryDto} from "./dto/response/category.dto";
import {GetFilterCategoryDto} from "./dto";
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
}
