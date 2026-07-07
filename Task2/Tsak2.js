
let month = parseInt(prompt("Enter your birth month number:"));
let monthName;

switch (month) {
    case 1: monthName = "January";
        break;
    case 2: monthName = "February";
        break;
    case 3: monthName = "March";
        break;
    case 4: monthName = "April";
        break;
    case 5: monthName = "May";
        break;
    case 6: monthName = "June";
        break;
    case 7: monthName = "July";
        break;
    case 8: monthName = "August";
        break;
    case 9: monthName = "September";
        break;
    case 10: monthName = "October";
        break;
    case 11: monthName = "November";
        break;
    case 12: monthName = "December";
        break;
    default: monthName = "Invalid month number";
}
document.write(`The output: ${monthName}`);


/* 2 */
let number = 1;

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(number + " ");
        number++;
    }
    document.write("<br>");
}

/* 3 */
 for (let i = 1; i <= 1000; i++) {
      if (i % 13 === 0) {
        document.write(i + "<br>");
    }
}

/* 4 */
function multiplication2(num1, num2) {
  let result = 0;

   for (let i = 1; i <= num2; i++) {
    result = result + num1;
  }

   return result;
}

document.write(multiplication2(5, 4) + "<br>");
document.write(multiplication2(2, 8) + "<br>");
document.write(multiplication2(7, 6) + "<br>");

/* 5  */
function triangleArea(base, height) {
     return 0.5 * base * height;
}
document.write(triangleArea(10, 5));

/* 6 */
function isPandigital(number) {
    let numberString = number.toString();

    for (let digit = 0; digit <= 9; digit++) {
        if (!numberString.includes(digit.toString())) {
          return false;
        }
    }

    return true;
}

document.write(isPandigital(98140723568910) + "<br>");
document.write(isPandigital(90864523148909) + "<br>");

/* 7 */
let drink = prompt("Enter your favorite drink:").toLowerCase();

let message;

switch (drink) {
    case "banana":
        message = "The price of a banana drink is 20 dollars";
        break;

    case "apple":
        message = "The price of an apple drink is 15 dollars";
        break;

    case "orange":
        message = "The price of an orange drink is 18 dollars";
        break;

    case "mango":
        message = "The price of a mango drink is 25 dollars";
        break;

    case "strawberry":
        message = "The price of a strawberry drink is 30 dollars";
        break;

    default:
        message = "This drink is not available";
    }

document.write(message);

/* 8 */
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

document.write(fullName("Adam", "McCallen") + "<br>");
document.write(fullName("Alex", "Mercer"));