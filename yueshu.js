for (let i = 1; i <= 10000; i++) {
    // let shu = i;
    let sum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum += j;
        }
    }
    if (i == sum) {
        console.log(i);
    }
}