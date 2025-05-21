const number ={
    x:1,
    y:2,
    sum(){
        return this.x + this.y;
    }
}
// const result = number.sum.bind(number);
console.log(number.sum()); 