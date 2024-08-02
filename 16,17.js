
// Task 1

let name = prompt("Введите ваше имя");
let age = prompt("Введите ваш возраст");
alert("Имя: " + name + "\nВозраст: " + age);

// Task 2 

let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let  remainder = num1 % num2;

console.log("Остаток от деления " + num1 + " на " + num2 + " равен " + remainder);

// Task 3 

let isTrue = confirm("Согласны ли вы получать уведомления");

console.log("Согласен ли пользователь на получение уведомлений?: " + isTrue);

//Task 4

let age1 = prompt("Введите ваш возраст:");
let hasAnswered = age !== null && age.trim() !== "";

console.log("Пользователь ответил на вопрос о возрасте: " + hasAnswered);

//Task 5

let number = prompt("Введите число:");
let cube = number ** 3;

alert("Результат возведения числа в куб: " + cube);

// Task 6

let string1 = prompt("Введите первую строку:");
let string2 = prompt("Введите вторую строку:");
let concatenatedString = string1 + string2;

alert("Результат соединения строк: " + concatenatedString);

// Task 7

let number1 = prompt("Введите первое число:");
let number2 = prompt("Введите второе число:");
let number3 = prompt("Введите третье число:");

alert("Среднее значение чисел: " + ((+number1 + +number2 + +number3) / 3));

// Task 8

let hours = prompt("Введите количество часов:");
let minutes = prompt("Введите количество минут:");
let seconds = prompt("Введите количество секунд:");

let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

alert("Общее количество секунд: " + totalSeconds);

// Task 9

let celsius = prompt("Введите температуру в градусах Цельсия:");
let fahrenheit = (+celsius * 9/5) + 32;
let kelvin = (+celsius) + 273.15;

alert("Температура в Фаренгейтах: " + fahrenheit + "\nТемпература в Кельвинах: " + kelvin);

// Task 10

let radius = prompt("Введите радиус круга:");
let area = 3.14 * (+radius) ** 2;

alert("Площадь круга: " + area);





