// LOOPS


// FOR LOOP
for (let i=0; i<=5; i++){
    console.log(i);
}

console.log('===========================');

// FOR OF LOOP

const iterable= [0,1,2,3,4,5]

for (let a of iterable){
    console.log(a);
}


console.log('===========================');

const todo= [
    {
        id: 1,
        task: 'shoppingList',
        isComplate: true
    },
    {
        id: 2,
        task: 'meeting',
        isComplate: true
    },
    {
        id: 3,
        task: 'job',
        isComplate: true
    }
]

for (let i=0; i<todo.length; i++){
    console.log(todo[i].id);
    console.log(todo[i].task);
    console.log(todo[i].isComplate);
}


//FOR EACH

const myArray=[1,2,3,4,5]

myArray.forEach(function(eachItem){
    console.log(eachItem);
})

console.log('===========================');

//arrow kullanarak
myArray.forEach(eachItem=>console.log(eachItem))