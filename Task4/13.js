function shorterString(str1, str2, str3, str4, str5) {
    let shortest = str1;
    if (str2.length < shortest.length) {
      shortest = str2;
    }
    if (str3.length < shortest.length) {
      shortest = str3;
    }
    if (str4.length < shortest.length) {
      shortest = str4;
    }
    if (str5.length < shortest.length) {
      shortest = str5;
    }
    return shortest;
}

document.write(shorterString("air", "school", "car", "by", "github"));