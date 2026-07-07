 function scoreInUniversty(score) {
    if (score >= 95 && score <= 100) {
      return "A";
    } else if (score >= 85 && score <= 94) {
      return "B";
    } else if (score >= 70 && score <= 84) {
      return "C";
    } else if (score >= 50 && score <= 69) {
      return "D";
    } else if (score >= 0 && score <= 49) {
      return "F";
    } else {
      return "Invalid score";
    }
}

document.write(scoreInUniversty(96) + "<br>");
document.write(scoreInUniversty(3) + "<br>");
document.write(scoreInUniversty(71) + "<br>");