/*
function Cat (breed, color, name) {
    this.breed = breed;
    this.color = color;
    this.name = name;
    this.sayMeow = function () {
        alert ('Say meow');
    };
}

const newCat = new Cat ('Sphinx', 'red', 'Tom');
console.log('newCat > ', newCat);



class CatClass {
    constructor (breed, color, name) {
        name = name.toUpperCase ();
        this.breed = breed;
        this.color = color;
        this.name = name;
    }

    simpleProp = 101;

    sayMeow () {
        alert ('Say meow');
    };
}

const newCat2 = new CatClass ('Sphinx', 'red', 'Tom');
console.log('newCat2 > ', newCat2);
console.log('newCat2 > ', newCat2.simpleProp);
newCat2.sayMeow ();
*/



/*
//fnDeclaration
function fnDeclaration () {
}

//fnExpression
const fnExpression = function () {
}

// class Declaration
class DeclaratedExample {
}

// class Expression
const expressedClass = class {
}
*/



/*
const methodName = 'sayName';
class User {
    constructor (name) {
        this.name = name;
    }

    [methodName] () {
        console.log(this.name);
    }
}

const someUser = new User ('Tom');

console.log(someUser [methodName] ());
console.log(someUser.sayName ());
*/




class Vehicle {
    constructor (mark, model) {
        this.mark = mark;
        this.model = model;
    }

    getInfo () {
        console.log('Parent Method');
        
        console.log(`${this.model} ${this.mark}`);
        
    }
}


class Car extends Vehicle {
    constructor (mark, model, transmission) {
        super (mark, model);
        this.transmission = transmission;
    }        

    getInfo () {
        super.getInfo (); 
    }
}

const car = new Car ('6', 'Mazda', 'auto');


console.log('car > ', car);
car.getInfo ();

