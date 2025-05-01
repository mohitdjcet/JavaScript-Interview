//Count Frequency of Each Character
let string = "My name is mohit Kumar decodes and I am a sr. software engineer";

let frequency = {};
for (let index of string) {
  if (frequency[index]) {
    frequency[index]++;
  } else {
    frequency[index] = 1;
  }
}
console.log(frequency);

