import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Query } from '@nestjs/common';
import { ApiAcceptedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ResponseDto } from '../../common/dto';
import { UserRole } from '../../constants';
import { Auth, AuthUser } from '../../decorators';
import { CreateSubscriptionDto, GetFilterUserDto, UserDto } from './dto';
import { ChangePasswordDto } from './dto/request/change-password.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { User } from './entities';
import { UsersService } from './users.service';
@Controller('users')
@ApiTags('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @Auth([UserRole.ADMIN, UserRole.HOSPITAL, UserRole.COUNCIL, UserRole.EMPLOYEE])
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Filter users' })
    @ApiOkResponse({ type: UserDto })
    filterUsers(@Query() dto: GetFilterUserDto) {
        return this.usersService.filterUsers(dto);
    }

    @Get('current')
    @Auth([UserRole.ADMIN, UserRole.USER])
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'get current users' })
    @ApiOkResponse({ type: UserDto })
    async getCurrentUser(@AuthUser() user: User) {
        const userResult = await this.usersService.getUserById(user.id);

        return userResult.toResponseDto();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Get user by id',
        type: UserDto
    })
    @ApiOperation({ summary: 'Get user by id' })
    async getUser(@Param('id') id: string): Promise<UserDto> {
        const user = await this.usersService.getUserById(id);

        return user.toResponseDto({ isShowGeography: true });
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ResponseDto,
        description: 'update user successfully'
    })
    @ApiOperation({ summary: 'update user' })
    updateUserById(@Param('id') id: string, @Body() user: UpdateUserDto) {
        return this.usersService.updateUserById(id, user);
    }

    @Patch('subscription')
    @Auth([UserRole.USER])
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        description: 'Subscription successfully'
    })
    @ApiOperation({ summary: 'User paid subscription' })
    subscription(@Body() subscriptionTransactionDto: CreateSubscriptionDto, @AuthUser() user: User) {
        return this.usersService.subscription(subscriptionTransactionDto, user.id);
    }

    @Patch('change-password')
    @Auth([UserRole.USER, UserRole.ADMIN])
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: ResponseDto,
        description: 'Change password successfully'
    })
    @ApiOperation({ summary: 'Change password' })
    changePassword(@Body() changePasswordDto: ChangePasswordDto, @AuthUser() user: User) {
        return this.usersService.changePassword(user.id, changePasswordDto);
    }

    @Delete()
    @Auth([UserRole.USER])
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiAcceptedResponse({
        type: ResponseDto,
        description: 'Delete user successfully'
    })
    @ApiOperation({ summary: 'Allow users to delete their own accounts' })
    deleteUser(@AuthUser() user: User) {
        return this.usersService.deleteUser(user.id);
    }

    @Delete(':id')
    @Auth([UserRole.ADMIN])
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiAcceptedResponse({
        type: ResponseDto,
        description: 'Delete user successfully'
    })
    @ApiOperation({ summary: 'Delete user by admin' })
    deleteUserById(@Param('id') userId: string) {
        return this.usersService.deleteUserByAdmin(userId);
    }
}
