const a = {};
const b ={key:"b"};
const c = {key:"c"};

a['[object Object]'] = 987;
a['[object Object]'] = 123;

console.log(a[b]); // 123