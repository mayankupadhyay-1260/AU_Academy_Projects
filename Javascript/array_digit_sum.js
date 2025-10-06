let arr = [123, 456, 78910];
let lastdigit = 0, sum = 0;

for (let j = 0; j <= 2; j++) {
    let i = arr[j];
    while (i != 0) {
        lastdigit = i % 10;
        sum += lastdigit;
        i = Math.floor(i / 10);
    }
    console.log(`The sum of ${arr[j]} is ${sum}`);
    sum = 0;
}
