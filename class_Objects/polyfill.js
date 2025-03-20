const arr = [1, 2, 3, 4, 5, 6]

// Error: .forEach function does not exist on arr variable

// understand Real signature -> No Return, function input, value, index
// calls myfunction for every valye

if(!Array.prototype.myforEach){
    Array.prototype.myforEach = function(userFunction){
        const originalArr = this //points towards current object

        for(let i=0; i<originalArr.length; i++){
            userFunction(originalArr[i], i);
        }
    }
}


// arr.myforEach(function (value, index){
//     console.log(`Value at Index ${index} is ${value}`);
// })

// ********************************************

// signature .map
// return? - New Array, Iterates each elements, userFunc

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFunc){
        const result = []

        for(let i=0; i<this.length; i++){
            const value = userFunc(this[i], i)
            result.push(value)
        }

        return result
    }
}

const n= arr.myMap((e, index)=> e*2);
const n2= arr.myMap(function(e){
    return e*3;
});
// console.log(n);
// console.log(n2);


// Filter
// Signature: Return -new array | input: userfun,
// agr user ka function true return krta hai to current value ko new array me include kr leta hai

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userfun){
        const res = []
        for(let i=0; i<this.length; i++){
            if(userfun(this[i]))

            res.push(this[i]);
        }
        return res;
    }
}

const n3 = arr.myFilter((e) => e%2 == 0);
    // console.log(n3);

// sort
// signature -> returns same array, input: userFunc
// sorts the array in ascending or descending format

if(!Array.prototype.mySort){
    Array.prototype.mySort = function(userfun){
        
        for(let i=0; i<this.length; i++){
            for(let j=i; j<this.length; j++){
                if(this[j]>this[j+1]){
                    let temp = this[j];
                    this[j]=this[j+1];
                    this[j]=temp;
                }
            }
        }
        return this;
    }
}
const arr2=[7, 5, 9, 2, 1, 26, 52, 4]
const n4 = arr2.mySort((a, b) => a-b);
console.log(n4);

    
