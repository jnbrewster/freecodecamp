//Bonfire: Return Largest Numbers in Arrays
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Comparison Operators

*/

function largestOfFour(arr) {
  var longest = [0, 0, 0, 0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; s < arr[i].length; s++) {
      if (longest[i] < arr[i][s]) {
        longest[i] = arr[i][s];
      }
    }
  }


  return longest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

