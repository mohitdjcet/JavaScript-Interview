// Bind JS Interview question 

function b() {
    console.log(this.user);
}
b = b.bind({user: "Mohit"}).bind({user: "Decodes"});

b();