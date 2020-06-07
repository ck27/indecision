class Person {

    constructor(name = "Anonymous", age ) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age)
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

const me = new Student("Chethan",30,"Computer Science");
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student("Anonymous",30);
console.log(other.getGreeting());
console.log(other.getDescription());

class Traveller extends Person {
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const jon = new Traveller("Jon",29,"Winterfell");
console.log(jon.getGreeting());
const raven = new Traveller("Raven",29,"");
console.log(raven.getGreeting());