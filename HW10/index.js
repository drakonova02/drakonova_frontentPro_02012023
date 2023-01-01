// Task 1 - 2

let arrNumber = [];
let arrSquer = [];

for(let i = 10; i <= 20; ++i) {
    arrNumber.push(i);
    arrSquer.push(Math.pow(i, 2));
}

console.log(`Number of 10 - 20 is ${arrNumber.join(',')}`);
console.log(`Number of squer 10 - 20 is ${arrSquer.join(',')}`);

// Task 3

console.log(`Multiplication table of 7:`);

for(let i = 0; i <= 10; ++i) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// Task 4

let sum = 0;

for(let i = 1; i <= 15; ++i) {
    sum += i;
}

console.log(`Sum of 1 - 15 is ${sum}`);

// Task 5

let mult = 1;

for(let i = 15; i <=35; ++i) {
    mult *= i;
}

console.log(`Multiply of 15 - 35 is ${mult}`);

// Task 6

sum = 0;

for(let i = 1; i <= 500; ++i) {
    sum += i
}

console.log(`Average of 1 - 500 is ${(sum / 500).toFixed(2)}`);

// Task 7

sum = 0;

for(let i = 30; i <= 80; i += 2) {
    sum += i;
}

console.log(`Sum of coins 30 - 80 is ${sum}`);

// Task 8

arrNumber = [];

for(let i = 100; i <= 200; ++i) {
    if(i % 3 === 0) {
        arrNumber.push(i);
    }
}

console.log(`Number of 100 - 200 div 3 is ${arrNumber.join(',')}`);

// Task 9 - 11

function inputNumber() {
    let number = Number(prompt('Please, input number'));

    while(isNaN(number) || number <= 0) {
        number = Number(prompt('Error, please, input number again'));
    }

    return number;
}

const customerNumber = inputNumber();

arrNumber = [];
sum = 0;
let quantity = 0;

for(let i = 1; i <= customerNumber / 2; ++i) {
    if(customerNumber % i === 0) {
        arrNumber.push(i);

        if(i % 2 === 0) {
            sum += i;
            ++quantity;
        }
    }
}

if(customerNumber % 2 === 0) {
    ++quantity;
    sum += customerNumber;
}

console.log(`Dividers of ${customerNumber} is ${arrNumber.join(',')},${customerNumber}`);
console.log(`Quantity of coins dividers of ${customerNumber} is ${quantity}`);
console.log(`Sum of coins dividers of ${customerNumber} is ${sum}`);


// Task 12

console.log(`Multiplication table:`);

for(let i = 1; i <= 10; ++i) {
    for(let j = 1; j <= 10; ++j) {
        console.log(`${i} * ${j} = ${i * j};`)
    }
}