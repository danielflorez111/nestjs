import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from 'dtos/create-cat.dto';
import { CatsService } from 'services/cats.service';
import { Cat } from './../interfaces/cat.interface';


@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return `This action removes a #${id} cat`;
    }
}