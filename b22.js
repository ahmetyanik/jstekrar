for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("+++++++++++++");

let sum = 0;

for (let i = 0; i <= 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);

console.log("**************");

let nums = "";

for (let i = 1; i <= 1000; i++) {
  if (i % 100 === 0) {
    nums += i + " ";
  }
}

console.log(nums);

let nums2 = "";

for (let i = 0; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    nums2 += i + 1 + " ";
  }
}

console.log(nums2);


console.log("*************");

let nums3="";

for(let i=0;i<3;i++){
    for(let j=0;j<5;j++){

        nums3 += j + " ";
    }
}

console.log(nums3);

console.log("*****************");


function isPalindrome(str){

    let reverse = (str.split("").reverse().join(""));

    reverse === str ? console.log("Palindrome") : console.log("Not");

}

isPalindrome("alla")