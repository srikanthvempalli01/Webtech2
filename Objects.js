let car={
    brand: "Kia",
    color: "Blue",
    price: 1000000
}

function person(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.fullName=function(){
        return this.firstName+" "+this.lastName;
    }
}
let person1=new person("srikanth reddy","Vempalli");
console.log(person1);
console.log(person1.fullName());
console.log(person1.firstName);
console.log(person1.lastName);
