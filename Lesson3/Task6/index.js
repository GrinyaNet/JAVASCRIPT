/* eslint-disable */

/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* Раскоментируй код ниже, используя правильные операторы после знака присваивания */

const activeUser = anotherUser != null ? anotherUser : defaultUserName;
console.log(activeUser);
const hasAccess = isAdmin != false ? isAdmin : isLoggedIn;
console.log(hasAccess);
const isTruthy = message != anotherMessage;
console.log(isTruthy);
const isFalsy = false && isLoggedIn;
console.log(isFalsy);
const isNotTrue = typeof message == 'number';
console.log(isNotTrue);
const isTrue = typeof message == 'boolean';
console.log(isTrue);
