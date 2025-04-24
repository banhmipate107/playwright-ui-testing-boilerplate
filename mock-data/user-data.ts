import { faker } from "@faker-js/faker";

export const userData = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  company: faker.company.name(),
  website: faker.internet.url(),
  country: faker.location.countryCode("alpha-2"),
  city: faker.location.city(),
  address1: faker.location.streetAddress(),
  address2: faker.location.streetAddress(),
  state: faker.location.state(),
  zipcode: faker.location.zipCode(),
};
