import { data } from './1lab.js';
//1 задание
const concatenateNumbers = (num1, num2) => `${num1}${num2}`;

const result1 = concatenateNumbers(10, 5);
console.log(result1);
const result2 = concatenateNumbers(123, 4567);
console.log(result2);
const result3 = concatenateNumbers("10", "2222");
console.log(result3); 

//2 задание
const luckyNum = 18;
const nickname = "Lana";
const isAdult = true;
const HogwartsBattle = new Date('1998-05-02'); 
let address = { street: "Baker st", city: "London" };
let idk = [666, 777, 815];
let nullValue = null; 
function myFunction(param1, param2) {
    return param1 + param2;
}
let result = myFunction(33,77);

console.log("Lucky number: ", luckyNum);
console.log("Nickname: ", nickname);
console.log("Is Adult: ", isAdult);
console.log("Hogwarts Battle:", HogwartsBattle);
console.log("Address:", address);
console.log("Scores:", idk);
console.log("Null Value:", nullValue);
console.log(result);

//3 задание
const jsonString = JSON.stringify(data);
console.log(jsonString);