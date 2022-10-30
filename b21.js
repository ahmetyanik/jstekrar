let total = 0;

for (let i = 0; i < 21; i++) {
  total += i;
}

console.log(total);

for (let i = 1; i < 6; i++) {
  console.log(`There are ${i} bottles of beer on the wall.`);
}

for (let i = 0; i < 21; i++) {
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}
