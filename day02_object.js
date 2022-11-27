// OBJECT{}

var fName='Ali'
var lName='Can'
var age=25
var information=`${fName} ${lName} ${age}`
console.log(information)

//  Person Object

var person={
    fName:'Ali',
    lName:'Can',
    age:25,
    isEmployed:true
}
console.log(person)
console.log(typeof(person))

// Bilgileri cagirma
//. notation

console.log(person.fName)
console.log(typeof(person.lName))
console.log(typeof(person.age))

// [] Notationu kullanmak

console.log(person['lName'])

// Nested Object

const person1 ={
    fName: 'Ali',
    lName: 'Can',
    age: 25,
    isEmployed: true,
    address:{
        street: '',
        city:'',
        State: '',
    },
    hobies: ['swimming','running']

}
console.log(person1);



