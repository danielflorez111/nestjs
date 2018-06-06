import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    // @Post()
    // create(@Body() createUserDto) {
    //     return 'This action adds a new user';
    // }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.create(createUserDto);
    }

    @Get()
    findAll() {
        return 'This action returns all users';
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} user`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto) {
        return `This action updates a #${id} user`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `This action removes a #${id} user`;
    }

}