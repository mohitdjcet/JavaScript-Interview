const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const result = fruits.reduce((acc,curr)=>{
acc[curr] = (acc[curr] || 0) + 1;
return acc;
}, {});

console.log(result);

//{ apple: 3, banana: 2, orange: 1 }

