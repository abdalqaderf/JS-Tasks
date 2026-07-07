/* 1 */
function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {
      document.write(
        `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.<br>`
    );
}

tellFortune("software engineer", "Jordan", "Alice", 3);


/* 2 */
function calculateDogAge(puppyAge) {
    let dogAge = puppyAge * 7;

    document.write(`Your doggie is ${dogAge} years old in dog years!<br>`);
}
 calculateDogAge(1);

