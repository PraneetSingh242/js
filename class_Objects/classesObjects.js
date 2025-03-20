class person{
    // constructor(fname, lname){
    //     this.fname = fname
    //     this.lname = lname
    // }
    
    getFullName(fname, lname){
        console.log(`${fname} ${lname}`);
        
    }

}

const p1 = new person('Kanika', 'Raj');
const p2 = new person('Praneet', 'Singh');

p2.getFullName('Kanika', 'Raj');
p1.getFullName('Praneet', 'Singh');