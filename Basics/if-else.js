
function chechtruthy(value){
    if(value){
        console.log("truthy");    
    }
    else{
        console.log("falsy");    
    }
}

// chechtruthy(0)
// chechtruthy(1)
// chechtruthy("Praneet")
// chechtruthy("")
// chechtruthy([])
// chechtruthy([1,2])

function Bill(amount){
    return amount > 1000 ? (amount * 0.9) : amount
}

console.log(Bill(1200));
console.log(Bill(900));
console.log(Bill(9000));
