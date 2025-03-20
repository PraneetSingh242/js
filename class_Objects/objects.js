console.log("hello")

let p1= {
    fname : "kanika",
    lname : "raj"
}
let p2 = {
    ...p1 //spread operator
}

p2.fname = "Praneet"
p1.lname = "Singh"
console.log(p2);

console.log(p1)

let b1 = {
    fname: "Kanika",
    lname: "raj",
    age: 22
}

const b1String = JSON.stringify(b1);
console.log(b1String);

let b2 = JSON.parse(b1String);
b2.fname="Praneet"
console.log(b2);