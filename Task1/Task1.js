
/* 1 */
let operation = prompt("Enter operation: +, -, *, /").trim();

let firstNumber = parseFloat(prompt("Enter first number:"));
let secondNumber = parseFloat(prompt("Enter second number:"));
let result;

switch(operation){

    case "+":result==firstNumber+secondNumber;
        break;
    
    case "-": result=firstNumber-secondNumber;
        break;
    case "/": result=firstNumber/secondNumber;
        break;
    case "*": result=firstNumber*secondNumber;
        break;
}
document.write(`Result: ${result}<br>`);
document.write(`${firstNumber}<br>`);
document.write(`${secondNumber}<br>`);
document.write(`${operation}`)


/* 2 */
 let mark = 85;
    let grade;

if (mark < 50) {
    grade = "FAIL";}
else if (mark >= 50 && mark <= 59) {
    grade = "D";} 
else if (mark >= 60 && mark <= 69) {
    grade = "C";} 
else if (mark >= 70 && mark <= 79) {
    grade = "B";}
else if (mark >= 80 && mark <= 89) {
    grade = "A";} 
else if (mark >= 90 && mark <= 100) {
    grade = "A+";} 
else {
  grade = "Invalid mark";
}

    document.write(`Mark: ${mark}<br>`);
    document.write(`Grade: ${grade}`);

    /* 3 */
const PI = 3.14;
let radius = 5;

let area = PI * radius * radius;

document.write(`Radius: ${radius}<br>`);
document.write(`π Value: ${PI}<br>`);
document.write(`Area of Circle: ${area}`);


