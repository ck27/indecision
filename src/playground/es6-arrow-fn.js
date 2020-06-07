const square = function(x) {
    return x*x;
};

const es6square = (x) => {
    return x*x;
};

const arrowSquare = (x) => x*x;

console.log(square(9));
console.log(es6square(9));
console.log(arrowSquare(10));



const add = function (a,b) {
    return a + b;
};

console.log(add(3,4,100));


const users = {
    "name" : "Chethan",
    "cities" : [
        "Bengaluru", "London", "Mumbai"
    ],
    palcesLivedIn : function() {
        const messages = this.cities.map( (city) => "lived in "+ city + "!" );
        return messages;
    },
    es6palcesLivedIn() {
        this.cities.forEach( (city) => {
            console.log(this.name + " lived in " + city);
        });
    }
}

console.log(users.palcesLivedIn());

users.es6palcesLivedIn();


const mathUtil = {
    "numbers" : [1,2,3],
    "multiplyBy": 2,
    multiply() {
        return this.numbers.map( (number) => number * this.multiplyBy);
    }
}

console.log(mathUtil.multiply());ss