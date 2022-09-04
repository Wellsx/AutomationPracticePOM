import { faker } from '@faker-js/faker';
import moment from 'moment';

faker.locale = 'en_AU';

moment.locale('en-ca');

class Data {
  today = moment().format('L');

  // Time stamp initialization
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  uniqueEmailAddress = 'test+_' + this.getUnixTimeStamp() + '@testing.com';

  faker = faker;

  email = faker.internet.email();

  male_email = 'testM+_' + this.getUnixTimeStamp() + '@testing.com';

  female_email = 'testF+_' + this.getUnixTimeStamp() + '@testing.com';

  firstName = faker.name.firstName();

  male_firstName = faker.name.firstName('male');

  female_firstName = faker.name.firstName('female');

  new_firstName = faker.name.firstName();

  new_lastName = faker.name.lastName();

  lastName = faker.name.lastName();

  male_lastName = faker.name.lastName('male');

  female_lastName = faker.name.lastName('female');

  address = faker.address.streetAddress();

  postcode = '12345';

  password = 'Pass123';

  city = faker.address.cityName();

  state = 'Alabama';

  stateValue = '1';

  phoneNumber = faker.phone.phoneNumber('+ 387 ## ### ###');

  userEmail = 'asd@asdsa.asda';

  userPassword = 'Password1234';

  man = '1';

  woman = '2';

  save_email(user) {
    cy.readFile('cypress/fixtures/users.json').then((records) => {
      records.users.push({
        email: user,
      });

      cy.writeFile('cypress/fixtures/users.json', records);
    });
  }
  save_email_male(user) {
    cy.readFile('cypress/fixtures/male_users.json').then((records) => {
      records.users.push({
        email: user,
      });
      cy.writeFile('cypress/fixtures/male_users.json', records);
    });
  }
  save_email_female(user) {
    cy.readFile('cypress/fixtures/female_users.json').then((records) => {
      records.users.push({
        email: user,
      });
      cy.writeFile('cypress/fixtures/female_users.json', records);
    });
  }
}

export default new Data();
