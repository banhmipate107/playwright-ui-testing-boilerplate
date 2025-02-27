import { faker } from "@faker-js/faker";

// const userData = {};
// userData["name"] = faker.person.fullName();
// userData["email"] = faker.internet.email();
// userData["password"] = faker.internet.password();
// userData["company"] = faker.company.name();
// userData["website"] = faker.internet.url();
// userData["country"] = faker.location.countryCode("alpha-2");
// userData["city"] = faker.location.city();
// userData["address1"] = faker.location.streetAddress();
// userData["address2"] = faker.location.streetAddress();
// userData["state"] = faker.location.state();
// userData["zipcode"] = faker.location.zipCode();

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
