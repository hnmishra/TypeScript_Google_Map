import { faker } from '@faker-js/faker';


export class Company {
    companyName: string;
   // catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = "Hyderabad";//faker.company.companyName();
        //this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: 17.387140,
            lng: 78.491684,
        }
    }
    
    markerContent(): string { 
        return `Company Name is : ${this.companyName}`;
      }
}