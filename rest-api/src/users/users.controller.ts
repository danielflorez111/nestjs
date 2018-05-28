import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Post()
    create(@Body() createUserDto) {
        return 'This action adds a new user';
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