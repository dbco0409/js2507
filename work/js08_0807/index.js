const person = {
    myName : "유채",
    age : 20,
    eyeColor : "brown"
}

const person2 = new Object({
    myName : "유채2",
    age : 40,
    eyeColor : "yellow"
})

const person3 = {
    myName : "유채3",
    age : 30,
    eyeColor : "pink"
}

const man = Object.create(person3)
man.myName = "피터";
man.age = 24;
man.etc = "기타";

const fruits = [
    ['apples',300],
    ['pears',900],
    ['bananas',500]
];

const myObj = Object.fromEntries(fruits);