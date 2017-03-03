/*
function order(words){
  if(words == "") {
    console.log("here");
  return "";
  } else {
    var values = words.split(" "); // create an array with the result
    // console.log(values)
    values.sort((a,b) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
    return values.toString().replace(/,/g, " ");
    // values.map((value, index) => {
    //   console.log(value.match(/\d+/)[0], index);
    // })
    // console.log(values);
    // values.sort((a,b) => console.log(a,b));
    // var rightOrder = [];
    // var lastNumber = 1;
    // // while (true) {
    //   for (var i = 0; i < values.length; i++) {
    //     var numberText = values[i].match(/\d+/)[0];
    //     if ( numberText == rightOrder) {
    //       console.log(values[i]);
    //     }
    //   }
    // }
    // rightOrder.push("value");
    // console.log(rightOrder);

  }
}
order("is2 Thi1s T4est 3a");
*/
/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Example Input

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example Output

["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  return data.map((value, index) => (value[0] >= 55 && value[1] > 7) ? "Senior" : "Open")
}

console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))

// function solution(number){
//   let totalNumber=0;
//   for(var i=1; i < number; i++ ) {
//     if(i % 3 == 0 || i % 5 == 0){
//       totalNumber += i;
//     }
//     console.log("partial", i, totalNumber)
//   }
//   return totalNumber;
// }

solution = n => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
  return s;
}

console.log(solution(1000))

function SeriesSum(n)
{
  let value = 1;
  let divider = 1;
  for(var i = 1; i < n; i++){
    divider += 3;
    value += 1 / divider;
  }
  return value.toFixed(2).toString();
}

console.log(SeriesSum(58));
*/
var uniqueInOrder=function(iterable){

  return iterable
  .toString()
  .replace(/,/g,"")
  .split("")
  .filter((value, index, arr) => {
    if(value !== arr[index+1] || typeof(arr[index+1]) === undefined) {

      // console.log(typeof(value))
      // let newValue=parseInt(value)
      // console.log("not a number:",isNaN(newValue))
      // console.log(typeof(newValue))

      // console.log(value.match(/\d+/) != null ? value.match(/\d+/)[0] : value)

      return value;
    }
  })
  .map((value, index) => {
    return value.match(/\d+/) != null ? parseInt(value) : value;
  })
}
// console.log('AAAABBBCCDAABBB'.toString().replace(/,/g,"").split("").filter((value, index, array) => {
//
// }))
// console.log(parseInt("1",10));

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]))
// expected ['A','B','C','D','A','B']

var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

const reducer = (acc, x) =>
  acc[acc.length - 1] === x
    ? acc
    : [...acc, x]

const uniqueInOrder = x => [].reduce.call(x, reducer, [])
