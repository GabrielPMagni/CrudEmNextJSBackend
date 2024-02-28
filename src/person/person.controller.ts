import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from 'src/dto/person/create';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getPerson() {
    return await this.personService.findAll();
  }

  @Post()
  async createPerson(@Body() createPersonDto: CreatePersonDto) {
    return await this.personService.create(createPersonDto);
  }
}
