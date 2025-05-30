// Day-25 JS interview Question

// for(var i=1 ; i<=3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

//IIFE
for(var i=1 ; i<=3; i++) {
    ((i)=>{
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(i);
}
