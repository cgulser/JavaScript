// Anonymous Funktion (Isimsiz)

//function(a,b,c){
//return a+b+c
//}

//Uncaught SyntaxError: Function statements require a function name

// Syntax hatasi almamak icin bir degiskene atariz fonksiyonumuzu.

var result = function(a,b,c){
    return a+b+c
    }
    console.log(result(1,2,3))

    let info = function(fName, lName, age){
        console.log(fName+' '+ lName+' '+ age)
    }
    info('Ali','Kan',35)

    // Arrow Function

    function sum(a){
        return a+100
    }
    console.log(sum(10))

    //Function ve adini sildik
    //parametre ve body arasina => esittir ve buyuktur karekterlerini ekleriz
    // **Eger tek parametre varsa paranteylerde silinebilir**

    var arrow=(a)=> a+100
    
    console.log(arrow(10))

    var arrow= (a,b)=>a+b+100
    console.log(arrow(10,10))

    // Paramaetresiz fonksiyonlarda Arrow
    
    //Traditional Function

    var a= 5, b=6
    function sum1(){
        return a+b+100
    }
    console.log(sum1())

    //Anonymous Function

    a=6
    b=7
    var newSum= function(){
        return a+b+100
    }
    console.log(newSum())

    var arrow =(a,b)=>a+b+100
    console.log(arrow(12,13))

// Prizma hacmi

var prizma=(l,w,h)=>l*w*h
console.log(prizma(4,5,3))


     