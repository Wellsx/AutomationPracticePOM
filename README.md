# End-to-end automated tests of [automationpractice.com](http://automationpractice.com/index.php?) using [Cypress.io](https://www.cypress.io/) and Page Object Model (POM) design

---

## Project setup

- Install [node.js](https://nodejs.org/en/)
- Install [Visual Studio Code](https://code.visualstudio.com/download)
- Clone project repository
- Open project in VS Code
- Open terminal in VS Code shortcut `` CTRL+SHIFT+` ``
- In VS Code terminal run: `npm init`
- Next in VS Code terminal run: `npm install cypress`
- After successfully installing Cypress in terminal run: `npx cypress open`
  This will run Cypress for the first time and verify that everything is installed correctly.
- Close the Cypress GUI runner by pressing CTRL+C in VS code terminal

## Running tests

- To run tests in GUI mode run `npx cypress open` in VS terminal
- To run tests in headless mode run `npx cypress run` in VS terminal

## Tests

<details>
  <summary><b>Registration</b></summary>

- [registration.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Registration/registration.cy.js) - Register a new user
- [registration_male_female.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Registration/registration_male_female.cy.js) - Register a new male or female user and saving the email in a [json file](https://github.com/Wellsx/AutomationPracticePOM/tree/main/cypress/fixtures)
- [registration_multiple.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Registration/registration_multiple.cy.js) - Register multiple users and saving the user email in a [json file](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/fixtures/users.json)
- [registration_new_address_name.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Registration/registration_new_address_name.cy.js) - Register a new user with a different address name/lastname
- [registration_new_email.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Registration/registration_new_email.cy.js) - Register a new user with a different email
- [registration_new_email_and_name.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Registration/registration_new_email_and_name.cy.js) - Register a new user with a different email and address name/lastname

</details>

<details>
  <summary><b>Login</b></summary>

- [login.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Login/login.cy.js) - Logs the user in
- [login_with_new_male_user.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Login/login_with_new_male_user.cy.js) - Logging in as a [newly registered male user](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/fixtures/male_users.json)
- [login_with_new_female_user.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Login/login_with_new_female_user.cy.js) - Logging in as a [newly registered female user](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/fixtures/female_users.json)
- [invalid_login_error.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Login/Invalid_login_error.cy.js) - Logs the user in with wrong credentials and verifies the error message

</details>

<details>
  <summary><b>Shop</b></summary>

- [verify_product_price.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/verify_product_price.cy.js) - Comparing the price on the homepage to the product page price
- [purchase_product_fixed_price.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/purchase_product_fixed_price.cy.js) - Purchasing a product and checking its fixed price
- [purchase_product_home_page.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/purchase_product_home_page.cy.js) - Purchasing a product from the homepage
- [purchase_product_quick_view.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/purchase_product_quick_view.cy.js) - Purchasing a product from the homepage through the quick view modal
- [purchase_multiple_products.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/purchase_multiple_products.cy.js) - Purchasing multiple products from the homepage

</details>

<details>
  <summary><b>User Account</b></summary>

- [personal_information.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/personal_information.cy.js) - My personal information button and page test
- [update_address.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/update_address.cy.js) - Login and update user address
- [add_new_address.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/add_new_address.cy.js) - Login and add a new user address
- [delete_address.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/delete_address.cy.js) - Login and delete user address
- [order_history.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/order_history.cy.js) - Login open order history and verify last order
- [wishlist.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/wishlist.cy.js) - Login and add an item to wishlist and verify wishlist

</details>

<details>
  <summary><b>Navigation Buttons</b></summary>

- [top_menu_buttons.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Navigation_Buttons/top_menu_buttons.cy.js) - Tests top menu navigation buttons and submenus
- [search.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Navigation_Buttons/search.cy.js) - Search for an item using the search bar
- [customer_service.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Navigation_Buttons/customer_service.cy.js) - Typing a sample message, uploading an image and sending it to customer service

</details>

---

## CircleCI

Latest run status:

[![AutomationPracticePOM](https://circleci.com/gh/Wellsx/AutomationPracticePOM.svg?style=svg)](https://app.circleci.com/pipelines/github/Wellsx/AutomationPracticePOM?branch=main)

## License

This project is licensed under the terms of the [MIT LICENSE](https://github.com/Wellsx/AutomationPracticePOM/blob/main/LICENSE)
