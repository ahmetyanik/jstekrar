const strUpper = (str) => {
  const newArray = str.split(" ");

  let newStr = "";

  for (let i = 0; i < newArray.length; i++) {
    newStr +=
      newArray[i].substring(0, 1).toUpperCase() +
      newArray[i].substring(1) +
      " ";
  }

  console.log(newStr);
};

strUpper("the quick brown fox");

const largestWord = (str) => {
  const array = str.split(" ");

  let largest = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > largest.length) {
      largest = array[i];
    }
  }

  console.log(largest);
};

largestWord("Web Development Tutorial");

const numberOfVowel = (str) => {
  let num = 0;

  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "ü", "u", "o", "ö"].includes(str[i])) {
      num++;
    }
  }

  console.log(num);
};

numberOfVowel("The quick brown fox");

const passwordProduction = (numberOfChar) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const array = chars.split("");

  let password = "";

  for (let i = 0; i < numberOfChar; i++) {
    password += array[Math.floor(Math.random(chars.length) * 10)];
  }

  console.log(password);
};


passwordProduction(5)