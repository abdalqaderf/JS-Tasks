function smallerNumber(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
  } else {
        return num3;
  }
}
document.write(smallerNumber(8, 6, 7) + "<br>");
document.write(smallerNumber(5, 99, 34) + "<br>");
document.write(smallerNumber(5, 99, 3) + "<br>");
document.write(smallerNumber(5, 3, 3) + "<br><br>");