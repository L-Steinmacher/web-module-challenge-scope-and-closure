

function createBase(num){
    return (base) => {return base + num};
}

let addTen = createBase(10);
console.log(addTen(23));//returns 33

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27