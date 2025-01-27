import { faker } from "@faker-js/faker";
//const { faker } = require('@faker-js/faker');

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = "faker.person.firstName()";
    this.location = {
      lat: 	28.644800,//faker.location.latitude(),
      lng: 	77.216721//faker.location.longitude(),
    };
  }
  markerContent(): string { 
    return `User Name: ${this.name}`;
  }
}
