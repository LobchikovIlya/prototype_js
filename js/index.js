'use strict';
// создаем функцию конструктор
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
// создаем новый обьект
const userProto = new User();

userProto.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}
console.table(users);

// HW Получить массив полных имен лиц женского пола
// школьного возраста (6 - 18 лет).

const schoolAgeWomenFullNames = users
  .filter(isSchoolAgeWoman)
  .map(getUserFullName);

function isSchoolAgeWoman(user) {
  return user.age >= 6 && user.age <= 18 && !user.isMale;
}

function getUserFullName(user) {
  return user.getFullName();
}
console.table(schoolAgeWomenFullNames);

/*************** */



//Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com
const userEmails = users.some(getEmail);

function getEmail(user) {

  return user.email === 'useremail99@gmail.com';
}

console.log(userEmails);


// Проверить, все ли пользователи подписаны (subscribed).
console.log(users.every(user => user.isSubscribed));