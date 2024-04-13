//Chapters 35-38

//Q1
function displayDateandTime(){
     return new Date
}
document.write(`<h3>${displayDateandTime()}</h3>`)

//Q2
function greet(){
    var fname = prompt("Enter your first name")
    var lname = prompt("Enter your last name")
    return alert(`Hi ${fname + " " + lname}!`)
}
greet()

//Q3
function sumTwoNumbers(){
    var num1 = +prompt("Enter first number")
    var num2 = +prompt("Enter second number")
    return alert(num1 + num2)
}
sumTwoNumbers()

//Q4

//Calculator
function twoNumberCalculator(num1,operator,num2){
     if (operator == "+") {
        document.write(`<h3>${num1 + num2}</h3>`)
     }else if (operator == "-"){
        document.write(`<h3>${num1 - num2}</h3>`)
     }else if(operator == "*"){
        document.write(`<h3>${num1 * num2}</h3>`)
     }else if(operator == "/"){
        document.write(`<h3>${num1 / num2}</h3>`)
     }
}
twoNumberCalculator(40,"/",20)

//Q5
function square(a){
    return document.write(`<h3>${a**2}</h3>`)
}
square(3)

//Q6
function factorialize(num) {
     if (num < 0) {
         return -1;
     }else if (num == 0) {
        return 1;
     }else {
      var factorialized_num = 1
      for (var i = 1; i <= num; i++) {
         factorialized_num *= i
      }
      return factorialized_num
    }
}
console.log(factorialize(5))

//Q7

//Counter
function counter(startnum,endnum){
   for (var i = startnum;i <= endnum;i++){
       console.log(i)
   }

}
counter(20,50)

//Q8
function calculateHypotenuse(base,perpendicular){
    function calculateSquare(a){
         return a**2    
    }
    return calculateSquare(base) + calculateSquare(perpendicular)
}
console.log(calculateHypotenuse(2,4))

//Q9
function areaOfRectangle(width,height){
      A = width * height
      return A
}
console.log(areaOfRectangle(20,20))

//Q10
function checkPalindrome(string){
    var reversed_string = ""
    for (var i = string.length - 1; i >= 0; i--){
        reversed_string += string[i]
    }
    if (reversed_string == string){
        console.log("given word is palindrome")
    }else{
        console.log("given word is not palindrome")
    }
}
checkPalindrome("eye")

//Q11
function capitalizeEveryWord(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }

console.log(capitalizeEveryWord("this is a string"))

//Q12
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var i = 1 ; i < array1.length ; i++)
  {
    if(result.length < array1[i].length)
    {
    result = array1[i];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

//Q13
function count_occurences_of_letter(string,letter){
    var regex = new RegExp(letter, 'g');
    var count = (string.match(regex)).length;
    return (`There are ${count} occurences of letter ${letter} in string "${string}"`)
}
console.log(count_occurences_of_letter("this is a string","t"))

//Q14
function calcCircumference(radius){
       var circumference = 2*3.14*radius
       return (`The circumference is ${circumference.toFixed(1)}`)
}
console.log(calcCircumference(10))

function calcArea(radius){
    var area = 3.14*(radius ** 2)
    return (`The area is ${area}`)
}
console.log(calcArea(20))

