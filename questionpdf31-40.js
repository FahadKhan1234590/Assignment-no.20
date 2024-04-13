//Question Pdf 31-40

//Chapter 31 - 34 (Date &amp; Time)

//Q1
var dObj = new Date()

//Q2
var dStr = new Date().toString()
console.log(typeof dStr)

//Q3
var d = new Date()
var day = d.getDay()
console.log(day)

//Q4
var dayNames =  ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert(dayNames[day])

//Q5

//Q6
var later = new Date("31 Dec 2020")
console.log(later)

//Q7
var later_2 = new Date("02 Feb 1992")
console.log(later_2)

//Q8
var time1980 = new Date("01 Jan 1980").getTime()
var reference_date = new Date("1977").getTime()
console.log(time1980 - reference_date)

//Q9
var time = new Date("2000")
console.log(time)

// Q10
function changeMonthToJanuary(date){
    date.setMonth(0)
    return date
}
console.log(changeMonthToJanuary(new Date()))

//Q11

//Q12
function changeMinutes(date,mintues){
    var date = prompt("Change Minutes \n Enter date")
    var date_2 = new Date(date) 
    var minutes = parseInt(prompt("Enter minutes to change in date"))
    date_2.setMinutes(minutes)
    return alert(date_2)
}
changeMinutes()

//Q13
function addHours(date,hours){
    var date = prompt("Add Hours \n Enter date")
    var date_2 = new Date(date) 
    var hours = parseInt(prompt("Enter hours to add in date"))
    date_2.setHours(new Date().getHours() + hours)
    return alert(date_2)
}
addHours()

//Q14
function ageCalculator(){
    var current_year = new Date().getFullYear()
    var birthYear = parseInt(prompt("Age Calculator \n Enter your birth year"))
    return alert(`Your age is ${current_year - birthYear - 1} or ${current_year - birthYear} (according to birth day and month)`)
}
ageCalculator()


//Chapter 35 - 37 (Functions)

//Q1
function displayAlert(){}

//Q2
function askName(){
    var userName = prompt("Enter name") 
    return userName
}

//Q3
function callTwoOtherFunctions(){
    changeMinutes()
    askName()
}
callTwoOtherFunctions()

//Q4
function askName(){
    var userName = prompt("Enter name") 
    return alert(userName)
}
askName()

//Q5
function concat(a,b,c){
     return a + b + c
}
alert(concat(1,"two",3))

//Q6
function concatenate(a,b){
     var c = a.toString() + b.toString()
     return c
}
alert(concatenate(1,2))

//Q7
function multiply(a,b,c){
    var d = a*b*c
    return d
}
console.log(multiply(1,2,"5"))

//Q8
function numArrayAverage(array){
    var sum = 0
    for (let i = 0; i < array.length; i++) {
          sum += array[i]  
    }
    var average = sum/array.length
    return average
}
console.log(numArrayAverage([10,20,30,40,50]))

//Q9
function sum(a,b){
    return Number(a) + Number(b)
}
console.log(sum("2",5)) 

//Q10 (already done)

//Q11
var returned_value = sum(2,10)
console.log(returned_value)

//Q12
function countLetters(word){
     return word.toString().length
}
console.log(countLetters("thisisstring"))

//Q13
function setYear(year){
    var d = new Date()
    d.setFullYear(year)
    return d
}
console.log(setYear(2020))

//Q14
function tellAge(birthyear){
    var a = new Date().getFullYear()
    var age = a - Number(birthyear)
    return `${age-1} or ${age}`
}
console.log(tellAge(2007))

//Q15
function presenceOfStudent(name){
    var a = ["zaid","haris","raza","abubakar","hassan","hussain","fatima"]
    var modified_name = name.toLowerCase()
    var flag = false
    for (var i = 0; i < a.length; i++) {
          if (a[i] == modified_name) {
            flag = true
          }
        
    }
    if (flag == true) {
        return true
    }else{
        return false
    }
}
console.log(presenceOfStudent("raza"))

//Q16
function repeat(word){
  return word.repeat(10)
}
console.log(repeat("hello"))

//Q17
function reverseArr(array){
    return array.reverse()
}
console.log(reverseArr([1,2,3,4,5]))


//Chapter 38 (Local vs. Global Variables)

//Q1
var a = "str"

//Q2
var a = 10
function sum(b){
  return a + b
}
console.log(sum(5))


//Chapter 39, 40 (Switch Statements)

//Q1
var food = "Pizza"

switch (food) {
    case "Burger":
      console.log("You are wrong")  
        break;
    
    case "Sandwich":
      console.log("You are wrong")  

    case "Pizza":
      console.log("You are right")  
    default:
      console.log("")  
}

//Q2
var cityName = "Karachi"

switch (cityName){
    case "Lahore":
        console.log("wrong")
        break;
    case "Islamabad":
        console.log("wrong")
        break;
    case "Karachi":
        console.log("right")
        break;
    default:
        console.log("")
        break;
}

