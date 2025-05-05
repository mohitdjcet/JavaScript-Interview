//Map() vs Filter()

const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map(num => num * 2);

console.log("Map Result:", mapResult); // [2, 4, 6, 8, 10]

const filterResult = arr.filter(num => num > 2);
console.log("Filter Result:", filterResult); // [3, 4, 5]