function canIGetADrivingLicense(age) {
    if (age >= 20) {
        return "yes you can";
    } else {
    let yearsLeft = 20 - age;
    return `please come back after ${yearsLeft} years to get one`;
    }
    }

document.write(canIGetADrivingLicense(21) + "<br>");
document.write(canIGetADrivingLicense(17) + "<br>");
document.write(canIGetADrivingLicense(20) + "<br>");