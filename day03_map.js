// MAP 


var originalArray =[2,4,6,8,10]
function double(x){
    return x*2
}

const newArray= originalArray.map(double)
console.log(newArray);

const newArray1= originalArray.map(function double(x){
    return x*2
})

// filter 

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,15]

//10 dan buyuk sayilari siralayalim

const filtreSayilar=numbers.filter(eachNum=> eachNum>10)
console.log(filtreSayilar);

// cift sayilar

const ciftSayilar=numbers.filter(eachNum=> eachNum%2==0)
console.log(ciftSayilar);

// tek sayilar
const tekSayilar=numbers.filter(eachNum=>  eachNum%2==1)
console.log(tekSayilar);
