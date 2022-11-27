// splice(): Yeni data ekleyebiliyoruz, kaldirabiliyoruz
// Mevcut datayi degistirebiliyoruz. 

const months=['Jan','March','April','June']
console.log(months);

months.splice(1, 0, 'Feb')
// 1: sonda yazilani (''Feb) 1. indexe ekle
// 0: Herhangi bir sey silme 
// 'Feb' ekle
console.log(months)

//** 1 sondan baslayarak birini sil
months.splice(4,1)
console.log(months)


// slice(startIndex(dahil), endIndex(haric))

console.log(months.slice(1));
// bastan ilk datayi sil

console.log(months.slice(-2));
// sondan iki datayi getir



console.log(months.slice(1, 3));
// 1. index dahil 3. index haric getir 
console.log(months) 