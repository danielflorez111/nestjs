import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    findAll() {
        let name: string = 'Daniel';
        let age: number = 25;
        let email: string = 'danielflorez111@hotmail.com';

        return { name, age, email };
    }

}