let moment = require('moment');
// let date = new Date();
// let months = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// console.log(date.getMonth());
// console.log(date.format('h:mm a, Do MMM, YYYY'));

//this...
// let timeDate = new Date().getTime();
// console.log(timeDate);
// is the same as using the moment library as per...
let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1504765800000;
// let createdAt = -7200000;
let date = moment(createdAt);
// let date = moment(someTimestamp);
console.log(date.format('h:mma Do MMM YYYY'));
// console.log(date.format('h:mm a'));
// console.log(date.format('HH[h]mm'));
// console.log(date.format('LT'));