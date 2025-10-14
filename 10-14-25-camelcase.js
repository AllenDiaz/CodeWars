Problem

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution

function toCamelCase(str){

  if (!str) return str;

  // Split the string by dash or underscore
  const words = str.split(/[-_]/);

  // Determine if the first character is uppercase (PascalCase)
  const isPascalCase = /^[A-Z]/.test(str);

  // Capitalize all words
  const camelWords = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Adjust the first word based on original casing
  if (!isPascalCase) {
    camelWords[0] = camelWords[0].charAt(0).toLowerCase() + camelWords[0].slice(1);
  }

  return camelWords.join('');

}