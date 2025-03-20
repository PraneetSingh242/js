const teas = {
    name: "Lemon Tea",
    "tea type": "Green Tea",
    caffeine: "low"
}

// console.log(teas.name);
// console.log(teas["tea type"]);

teas.origin = "China";
// console.log(teas.origin);

teas.caffeine = "Medium";
// console.log(teas.caffeine);

delete teas.caffeine
// console.log(teas.caffeine);

// console.log("origin" in teas);

// console.log(teas.hasOwnProperty("origin"));

for (let key in teas) {
    // console.log(`${key} : ${teas[key]}`);
         
    }

const myTeas = {
    greenTea: {
        name: "Green Tea",
        color: "Green"
    },
    blackTea: {
        name: "Black Tea",
        color: "Black",
        blackish: {
            fname: "red",
            lname: "tea"
        }
    }
}


for(let key2 in myTeas.greenTea){
    // console.log(`${key2} : ${myTeas.greenTea[key2]} `);
}
    
const teaCopy = {
    ...myTeas
}

// teaCopy.blackTea.blackish.fname ="Kanika";
const teaCopyStr = JSON.stringify(myTeas);

let teaCopy2 = JSON.parse(teaCopyStr);

// console.log(teaCopy.blackTea.blackish.fname)
// console.log(myTeas.blackTea.blackish.fname)

teaCopy2.blackTea.blackish.lname = "Raj"
console.log(teaCopy2.blackTea.blackish.lname)
console.log(myTeas.blackTea.blackish.lname)

