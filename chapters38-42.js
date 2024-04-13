//Chapters38-42

//FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

//Q1
function power(a,b){
    return a**b
}
console.log(power(4,2))

//Q2
function checkLeapYear(year){    
    var yearToString = year.toString()
    var yearEndNum = yearToString[yearToString.length - 1   ]
    var yearEndNum_toNum = Number(yearEndNum)

    if(yearEndNum_toNum == 2 || yearEndNum_toNum == 4 || 
    yearEndNum_toNum == 6 || yearEndNum_toNum == 8 ||
    yearEndNum_toNum == 0){
        return ("The year you entered is Leap Year")
    }else{
        return ("The year you entered is not Leap Year")
    }
    }
console.log(checkLeapYear(2029))

//Q3

//Q4
function marksAndAverage(fsubject,ssubject,tsubject){
     function average(a,b,c){
         obtainedNumber = a+b+c
         return obtainedNumber/3
     }
     function percentage(a,b,c){
          obtainedNumber = a+b+c
          return obtainedNumber / 300 * 100
     }

     return (`Average marks of 3 subjects : ${average(fsubject,ssubject,tsubject)}\nPercentage of 3 subjects: ${percentage(fsubject,ssubject,tsubject)}%`)
}

console.log(marksAndAverage(90,98,100))

//Q5
function findIndex(value,character){
    return value.indexOf(character)
}
console.log(findIndex("hello","h"))

//Q6
 function deleteVowels(sentence){
    return sentence.replace(/[aeiou]/gi,"")
}
console.log(deleteVowels("this is a string"))

//Q7
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

function countSuccessiveVowels(text) {
    text = text.toLowerCase();
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var char = text.charAt(i);
        var nextChar = text.charAt(i + 1);

        if (isVowel(char) && isVowel(nextChar)) {
            count++;
        }
    }

    return count;
}


const text = "aeiouu";
const occurrences = countSuccessiveVowels(text);
console.log("Number of occurrences of two successive vowels: ", occurrences);

//Q8
var user_input = +prompt("Write the distance in km")
function kmIntoMeters(distance){
      return distance * 1000
}

function kmIntoFeet(distance){
    return distance * 3281
}

function kmIntoInches(distance){
    return distance * 39370
}

function kmIntoCentimetre(distance){
    return distance * 100000
}

alert(`${user_input} km is ${kmIntoMeters(user_input)} meters`)
alert(`${user_input} km is ${kmIntoFeet(user_input)} feet`)
alert(`${user_input} km is ${kmIntoInches(user_input)} inches`)
alert(`${user_input} km is ${kmIntoCentimetre(user_input)} centimeters`)

//Q9
function calculateOvertimePay(hoursworked){
    var regularHours = 40
    var overtimeRate = 12

    if(hoursworked <= regularHours){
        return 0
    }else{
        var overTimeHours = hoursworked - regularHours
        var overTimePay = overTimeHours * overtimeRate
    }
    return (`Overtime Pay: Rs.${Math.ceil(overTimePay)}`)
}

console.log(calculateOvertimePay(41.5))

//Q10
