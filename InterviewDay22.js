// Passing agument mandatory in function
//ES6 Feature

function noName(){
    throw new Error("Name is required");
}

function display(name = noName()) {
    console.log("Hello " + name);
}

display("Mohit");