function calculateSupply(age, amountPerDay) {
    const MAX_AGE = 100;

    let yearsRemaining = MAX_AGE - age;
    let totalAmount = yearsRemaining * 365 * amountPerDay;

    document.write(`You will need ${totalAmount} cups of tea to last you until the ripe old age of ${MAX_AGE}<br>`);
    }

calculateSupply(30, 3);