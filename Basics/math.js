

let arr = [1, 2,3,4,7,8 ]
// console.log(arr.slice(1,4))
// console.log(arr);

let newArr = [ ...arr, 12,24,64]
// console.log(newArr);


let chaiTypes = {
    name: "Chai",
    ingredients: {
        milk: "full cream",
        tea: "assam tea",
        sugar: "white"
    },
    type: "Hot",
    recipe: "Boil water, add tea leaves, sugar and milk" 
}

let updatedChai = {
    ...chaiTypes,
    recipe: "Boil water, add tea leaves, sugar, water and milk with love"
}

// console.log(updatedChai);

let {name, ingredients} = chaiTypes //Object destructuring
// console.log(ingredients);
// console.log(myIngredients);

let newChaiArr = ["Ginger", "Black", "Orange"]
let newChaiArr2 = ["Oolong", "Masala", "Kiwi"]

let [arr1, arr2] = newChaiArr2 //array destructuring
// console.log([arr1, arr2]);
