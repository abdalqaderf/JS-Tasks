function randomBetweenNumbers(min, max) {
    return Math.random() * (max - min) + min;
    }

document.write(randomBetweenNumbers(1, 8) + "<br>");
document.write(randomBetweenNumbers(3, 100) + "<br><br>");