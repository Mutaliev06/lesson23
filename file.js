let price = 120;
function test() {
   let price = 50;
}
test();
console.log(price);


// Задание 1
function hello () {
    alert('Привет, Мир');
}
hello();

// Задание 2
function getText (text) {
    return text;
}
let a = getText('JavaScript');
alert (a);

//Задание 3
function min (num1, num2) {
    return Math.min(num1, num2);
}
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
console.log(min(num1, num2));

// Задание 4
function four (text, num) {
    return text.substring(0, num);
}
let text = prompt('Введите слово');
let num = prompt('Введите число');
console.log(four(text, num));

// Задание 5
//Выведется 120, т.к. price = 50 - это локальная переменная.

//Задание 6
//Не будет никаких изменений. Как выводилось 120, так и останется.
