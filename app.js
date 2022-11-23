function sum(){
    var num1=10
    var num2=20
    var num3=30
    var total= num1+num2+num3
    return total
}
console.log(sum())

// birden fazla parametreli fonksiyon

function information(location, price, rating){
console.log(`location: ${location}, price: ${price}, rating: ${rating}`)
}
information('Berlin','2018','200')

// Fgonksiyonu cagirip yeni bir degiskende saklama

const mySum= sum() + 100
console.log(mySum)

//Fonksiyonu parametre ve return ile cagirma 

function diff(num1,num2){
    return num2-num1
}
console.log(diff(50,100))

//Fonksiyonlari iki sekilde tanimlayip cagirabiliriz
//Direk tanimlama ve cagirma 
//Fonksiyonu bir degisken ile tanimlayip cagirma 

function square(num){
    return num*num
}
console.log(square(6))

const squareOfNumber= function square(num){
    return num*num
}
console.log(squareOfNumber(5))