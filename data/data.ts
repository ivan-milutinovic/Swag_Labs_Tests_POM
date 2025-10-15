//url
export const BASE_URL = 'https://www.saucedemo.com/';

//kredencijali
export const USERS = {
    correct: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    incorrectUser: {
        username: 'incorrect_username',
        password: 'secret_sauce'
    },
    incorrectPassword: {
        username: 'standard_user',
        password: 'incorect_password'
    },
    emptyUser: {
        username: '',
        password: 'secret_sauce'
    },
    emptyPassword: {
        username: 'standard_user',
        password: ''
    }
};

//podaci za kupovinu
export const CUSTOMER_INFO = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    zipCode: '11000'
};

//negativni test case
export const NEGATIVE_TEST_CASE_DATA = [
    {
        name: 'pogresno ime',
        user: USERS.incorrectUser.username,
        password: USERS.incorrectUser.password,
        errorMessage: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
        name: 'pogresna lozinka',
        user: USERS.incorrectPassword.username,
        password: USERS.incorrectPassword.password,
        errorMessage: 'Epic sadface: Username and password do not match any user in this service'
    },
    {
        name: 'prazno ime',
        user: USERS.emptyUser.username,
        password: USERS.emptyUser.password,
        errorMessage: 'Epic sadface: Username is required'
    },
    {
        name: 'prazna lozinka',
        user: USERS.emptyPassword.username,
        password: USERS.emptyPassword.password,
        errorMessage: 'Epic sadface: Password is required'
    }
]