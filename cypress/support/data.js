import { faker } from "@faker-js/faker";
import moment from "moment";

faker.locale = "en_AU";

moment.locale("en-ca");

class Data {
  today = moment().format("L");

  // Time stamp initialization
  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  uniqueEmailAddress = "test+_" + this.getUnixTimeStamp() + "@testing.qa";

  faker = faker;

  email = faker.internet.email();

  firstName = faker.name.firstName();

  new_firstName = faker.name.firstName();

  lastName = faker.name.lastName();

  address = faker.address.streetAddress();

  postcode = "12345";

  password = "Pass123";

  city = faker.address.cityName();

  state = "Alabama";

  stateValue = "1";

  phoneNumber = faker.phone.phoneNumber("+ 387 ## ### ###");

  userEmail = "asd@asdsa.asda";

  userPassword = "M0jaLozinka";
}

export default new Data();

