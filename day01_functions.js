//  Fonksiyonlar (Functions) (Yani Java'daki method dedigimiz JS'te Function )

// Parametresiz Fonksiyon 

function greet(){
    console.log('Hi !!')
}

greet()

// Parametreli Fonksiyon

function greetPeople(namePeople){
    console.log('Hi '+ namePeople)
}
greetPeople('Ali')
greetPeople(true)
greetPeople(20)
greetPeople(null)
greetPeople('Ali', 'Ece')
greetPeople()

// Ali 42    iki parametreli bir fonksiyon yazalim

function isimYas(name, age){
    console.log(name + age)
}

isimYas("Ali ", 35)