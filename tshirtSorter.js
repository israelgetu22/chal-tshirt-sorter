Write your solution below:

function sortedTshirt(str) {
  small = "";
  medium = "";
  large = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      small = small + "s";
    } else if (str[i] === "m") {
      medium = medium + "m";
    } else {
      large = large + "l";
    }
  }
  return small + medium + large;
}

result = sortedTshirt("lmmlsssmls");
console.log(result);

// function sorted(str) {
//   return str.split("").sort().reverse().join("");
// }

// result = sorted("lmmlsssmls");
// console.log(result);

// function tshirtSorter(sizes) {
//   let s = "";
//   let m = "";
//   let l = "";
//   let allSizes = "";

//   sizes.split("").forEach((letter) => {
//     if (letter === "s") {
//       s += letter;
//     } else if (letter === "m") {
//       m += letter;
//     } else if (letter === "l") {
//       l += letter;
//     }
//   });

//   allSizes = s + m + l;
//   return allSizes;
// }

// const sortShirt = (string) => {
//   let sarr = [];
//   let marr = [];
//   let larr = [];
//   // let sorted = []
//   for (i = 0; i < string.length; i++) {
//     // console.log(string[i])
//     if (string[i] === "s") {
//       sarr.push(string[i]);
//     } else if (string[i] === "m") {
//       marr.push(string[i]);
//     } else {
//       larr.push(string[i]);
//       // console.log(marr)
//       // console.log(sarr)
//       // console.log(larr)
//     }
//   }
//   let sorted = sarr.concat(marr, larr).toString();
//   return sorted;
// };

// console.log(sortShirt("lslmlmslsmls"));


// function tShirtSort(str){
//   let charArr = str.split('');
//   for (let i = 0; i < charArr.length; i++){
//     if (charArr[i] === 's') charArr[i] = 1;
//     else if(charArr[i] === 'm') charArr[i] = 2;
//     else charArr[i] = 3;
//   }
//    charArr.sort();

//     for (let i = 0; i < charArr.length; i++){
//     if (charArr[i] === 1) charArr[i] = 's';
//     else if(charArr[i] === 2) charArr[i] = 'm';
//     else charArr[i] = 'l';
//   }
//   console.log(charArr);
// }