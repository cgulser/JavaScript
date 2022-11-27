// concat(): Array'leri birlestirir. 

var drinks= ['coke', 'water', 'fanta', 'ayran']
var kebaps= ['adana', 'urfa', 'ciger', 'patlican']

var shoppingList= drinks.concat(kebaps)
console.log(shoppingList)

// reverse(): Tersten siralar
var numbers= [1,2,3,4,5,6,7,-13,-8,-9]
console.log('Original List :'+numbers)
numbers.reverse()

console.log('Reversed List :' + numbers);

// sort (): Kucukten buyuge siralar
numbers.sort()
console.log(numbers);

// Buyukten kucuge  siralama 
// sort + reverse
numbers.reverse()
console.log(numbers);