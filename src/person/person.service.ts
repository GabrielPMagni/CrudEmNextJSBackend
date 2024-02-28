import { Injectable } from '@nestjs/common';
import { Person } from 'database/person/person.model';

@Injectable()
export class PersonService {
  findAll() {
    return Person.findAll();
  }

  create(person: any) {
    return Person.create(person);
  }
}
