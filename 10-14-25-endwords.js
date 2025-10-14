Problem

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

// Solution


function solution(str, ending) {
  // Get the length of the ending string
  const len = ending.length;

  // Extract the last part of str with the same length as ending
  const strEnding = str.slice(-len);

  // Compare the extracted part with ending
  return strEnding === ending;
}
