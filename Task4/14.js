function longerString(str1, str2, str3, str4) {
    let longest = str1;
    if (str2.length > longest.length) {
      longest = str2;
    }
    if (str3.length > longest.length) {
      longest = str3;
    }
    if (str4.length > longest.length) {
      longest = str4;
    }
    return longest;
    }

document.write(longerString("air", "school", "car", "github") + "<br>");
document.write(longerString("air", "schoo", "car", "github") + "<br>");
document.write(longerString("github", "air", "schoo", "car") + "<br>");