function show() {
  {
   (function(){
    var a = 10;
    var b = 20;
   })();
  }
  console.log(`A:${a},B:${b}`);
}
show();
