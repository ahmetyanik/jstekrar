const deneme = (num, str) => {
  let newStr = "";

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  console.log(newStr);
};

deneme(3, "Woah");

console.log("****************");

const findMax = (array) => {
  console.log(Math.max(...array));
};

findMax([1, 6, 83, 91, 0, -4, 1337, 5]);

console.log("******************");

const printIfDivisibleByTen = (num) => {
  if (num % 10 === 0) {
    console.log("Even 10!");
  } else {
    console.log("no output");
  }
};

printIfDivisibleByTen(10);

for (let i = 0; i < 125; i++) {
  console.log(i);
  printIfDivisibleByTen(i);
}

console.log("*************");

function largest(a, b, c) {
  const args = [...arguments];

  console.log(Math.max(...args));
}

largest(1, 52, 3);

const bigOne = (num1, num2, num3, num4, num5) =>
  Math.max(num1, num2, num3, num4, num5);

console.log(bigOne(2, 35, 98, 78, 49));

const isString = (arg1, arg2) =>
  typeof arg1 === "string" && typeof arg2 === "string" && true;

console.log(isString("kk", 5));

const firstWord = (str) => {
  console.log(str.split(" ")[0]);
};

firstWord("Internetting is hard");

const wordRepeater = (str) => {
  let newStr = "";

  for (let i = 0; i < str.split(" ").length; i++) {
    console.log(str.split(" ")[i]);

    for (let j = 0; j < str.split(" ").length; j++) {
      newStr += str.split(" ")[i] + " ";
    }
  }

  console.log(newStr);
};

wordRepeater("bunny");


const firstLetter = (str) =>{

    console.log(str[0]);
}

firstLetter("quylthulg")

const firstLetters = (str) =>{

    let newStr = "";

    const newArray = str.split(" ");

    for(let i=0;i<newArray.length;i++){
        newStr += newArray[i][0];
    }

    console.log(newStr);
}

firstLetters("What You See Is What You Get")

const foo = (str) => str.split("").includes("o") ? true : false;

console.log(foo(""));


const bar = (param) => param.length-1< "Cat".length ? "Cat" : param.replace(param.substring(0,2), "Cat") ;


console.log(bar("International Space Station"));

console.log(bar("Tomato"));