// ARRAY DATA EKLEME VE SILME 

var studyList= ['Can','Ece','Ali','Naz']

console.log(studyList);
console.log(typeof(studyList));
console.log(studyList.length);

// push(): Array' in sonuna Data ekler

studyList.push('Samet')
console.log(studyList);

// unshift(): Array' in basina Data ekler

studyList.unshift('Elif')
console.log(studyList);

// pop(): Array' in sonundaki Datayi siler

studyList.pop('Samet')
console.log(studyList);

// shift(): Array' in basindaki Datayi siler

studyList.shift('Elif')
console.log(studyList);

// indexOf(item, from)

var ages=[10,20,30,40,50,30,60,40]
 
console.log(ages.indexOf(20));            //1
console.log(ages.indexOf(30));            //2
console.log(ages.indexOf(30, 3));         //5
console.log(ages.indexOf(80));            // return -1 eslesme yok anlaminda 

// lastIdexOf():
// Sondan baslayarak istenen rakamin index'ini veriri

console.log(ages.lastIndexOf(30));         // 5

// includes(item , starting index)

console.log(ages.includes(60));             // true
console.log(ages.includes(90));             // false

console.log(ages.includes(40,3));

const isExist = ages.includes(40,3)
console.log(isExist);

const isExist1 = ages.includes(80,3)
console.log(isExist1);