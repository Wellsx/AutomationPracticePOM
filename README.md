# [Cypress.io](https://www.cypress.io/) end-to-end automated tests using Page Object Model (POM) design

## [automationpractice.com](http://automationpractice.com/index.php?)

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

- [dress_purchase.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/dress_purchase.cy.js) - Purchasing a dress and logging in through order purchase step
- [blouse_purchase.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/blouse_purchase.cy.js) - Log in as a female user and purchase blouse
- [blouse_and_dress_purchase.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/blouse_and_dress_purchase.cy.js) - Purchasing multiple items
- [wishlist.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Shop/wishlist.cy.js) - Login and add an item to wishlist and verify wishlist

</details>

<details>
  <summary><b>User Account</b></summary>

- [personal_information.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/personal_information.cy.js) - My personal information button and page test
- [update_address.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/update_address.cy.js) - Login and update user address
- [add_new_address.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/add_new_address.cy.js) - Login and add a new user address
- [delete_address.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/delete_address.cy.js) - Login and delete user address
- [order_history.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/User_Account/order_history.cy.js) - Login open order history and verify last order

</details>

<details>
  <summary><b>Navigation Buttons</b></summary>

- [top_menu_buttons.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Navigation_Buttons/top_menu_buttons.cy.js) - Tests top menu navigation buttons and submenus
- [search.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Navigation_Buttons/search.cy.js) - Search for an item using the search bar
- [customer_service.cy.js](https://github.com/Wellsx/AutomationPracticePOM/blob/main/cypress/e2e/Navigation_Buttons/customer_service.cy.js) - Typing a sample message, uploading an image and sending it to customer service

</details>
