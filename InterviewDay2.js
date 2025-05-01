// firstNonRepeatedChar("aabbcddffe") --> "c" 

function firstNonRepeatedChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null; // If no non-repeated character is found
}
console.log(firstNonRepeatedChar("aabbcddffe")); // Output: "c"