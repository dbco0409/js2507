//모든 함수는 메서드 입니다.

const person = {
    firstName : "John",
    lastName : "Doe",
    fullName : function (){
        return this.firstName + " "+this.lastName;
    }
}

person.fullName();

/// 위의 에에서 person 객체 this를 참조 합니다.



//call() 객체는 다른 객체에 속한 메서드를 사용할 수 있다.

const person0 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName : "John",
    lastName : "Doe"
}


const person2 = {
    firstName : "Mary",
    lastName : "Doe"
}

person.fullName.call(person1);
person.fullName.call(person2);

// 인수가 있는 call 메서드

const ps = {
    fullName : function (city, country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const ps1 = {
    firstName : "John",
    lastName : "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
