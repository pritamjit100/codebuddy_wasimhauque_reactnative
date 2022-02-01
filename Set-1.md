# The Problem Statement

### Create multi-step form in React Native which will contain 3 forms in separate screens.

---

#### Screen 1:

**Form 1** will take 2 inputs, with the below validations:

- `emailId` - Required. Must be a valid email ID
- `password` - Required. Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.

#### Screen 1:

**Form 2** will take 3 inputs, with the below validations:

- `firstName` - Required. Allow only alphabets. Minimum of 2 character and maximum 50.
- `lastName` - Optional. If not empty, will only allow alphabets
- `address` - Required. Minimum length 10.

#### Screen 3:

**Form 3** will take 3 inputs, with the below validations:

- `countryCode` - Required. Allow only 2 country code, India (+91) and America (+1). Must be a dropdown input
- `phoneNumber` - Required. Allow only 10 digit numeric phone number
- `acceptTermsAndCondition` - Required. Will be a checkbox input and must be selected.

Each form will have 3 button, named below:

- `Back`: Will be disabled for **Form 1**
- `Save`: Will be enabled for all forms`
- `Save and Next`: Will be disabled for **Form 3**

#### Features:

- User can `Save and Next` only if the form valid for each step.
- User can go back to previous screen to change it's values
- Show error message to user for failed input validation

At the end of **Form 3**, when the user will click on save all the details needs to submitted, Show the details in an modal.

> Note: `acceptTermsAndCondition` must not be submitted

Sample Data:

```json
{
  "emailId": "john.doe@gmail.com",
  "password": "QWerty##11",
  "firstName": "John",
  "lastName": "Doe",
  "address": "22/B, Baker Street, London - 10089",
  "countryCode": "+91",
  "phoneNumber": "2225550909"
}
```
