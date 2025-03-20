
let person1 = {
    name: "ravi",
    greet: function(){
        console.log(`Hello ${this.name}`);
        
    }
}

let person2 = {
    name: "Praneet"
}

// person1.greet.call(person2)
// const bindgreet = person1.greet.bind(person2)
// bindgreet();

const obj = {
    // scope -> jb tk code chl rha hai
    personName: 'Akash',
    greet: function (){ 
        console.log(`Hello, ${this.personName}`);
        
    }
}

console.log("Hii");
// setTimeout(obj.greet, 5*1000);

// setTimeout(obj.greet.bind(obj), 5*1000);

// Promise in javascript

// setTimeout(() => console.log("Hello after 2 sec"), 2*1000);
setTimeout(() => console.log("Hello after 2 sec"), 0);

Promise.resolve().then(() => console.log("Promise resolve hogya"))



console.log("Bye");

