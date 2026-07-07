function positive(number) {
    if (number < 0) {
      return number * -1;
    } else {
      return number;
    }
}

document.write(positive(4) + "<br>");    
document.write(positive(-5) + "<br><br>");