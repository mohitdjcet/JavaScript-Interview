function showMarks(marks) {
  const msg = marks ?? "No Marks provided";
  console.log(`Grade: ${msg}`);
}

showMarks(90);
showMarks(); 
showMarks(0);
showMarks(40);

  const person = {
    name: "Mohit",
    greet: function () {
      console.log(this); // person object
    }
  };
  person.greet(); // { name: 'Mohit', greet: [Function: greet] }
  