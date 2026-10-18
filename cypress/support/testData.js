import { fakerEN_US as faker } from '@faker-js/faker';

export function createTestUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email(),
    password: faker.string.alphanumeric(12),
    firstName,
    lastName,
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile: faker.string.numeric(10)
  };
}
