//Array to Object Convert

const arr = ["apple", "banana", "cherry"];

const arrToObj = arr.reduce((obj,item,index) => ({
    ...obj,[index]: item
}),{})

console.log(arrToObj);