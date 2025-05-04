const str = "The happiest place on Earth";
const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
    let count = 0;
    str.toLowerCase().split("").forEach((char) => {
        vowels.includes(char) ? count++ : null;
    });
    return count;

}
console.log(countVowels(str));