//Chapters 31-34   

//DATE METHODS

//Q1
document.write(`<h3>${new Date()}</h3>`)

//Q2
function getMonth(){
    var month = new Date()
    var months =  [ "January", "February", "March", "April",
                 "May", "June", "July", "August", "September",
                  "October", "November", "December"]
    var month_index = month.getMonth()
    return alert(`Current month: ${months[month_index]}`)
}
getMonth()

//Q3
function getDay(){
    var day = new Date()
    var days =  ['Sunday', 'Monday', 'Tuesday',
                'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day_index = day.getDay()
    var gettingDay = days[day_index]
    var first_three_letters_of_day = gettingDay.slice(0,3)
    return alert(`Today is ${first_three_letters_of_day}`)
}
getDay()

//Q4
var day = new Date()
var days =  ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day_index = day.getDay()
var gettingDay = days[day_index]

if (gettingDay == "Saturday" || gettingDay == "Sunday"){
    console.log("It's Fun day")
}

//Q5
var date = new Date().getDate()
if (date < 16){
    document.write(`<h2>First fifteen days of the month</h2>`)
}else{
    document.write(`<h2>Last days of the month</h2>`)
}

//Q6
// var date_2 = new Date()
// document.write(`<h2>Current Date: ${date_2}</h2>`)

// var milliseconds = new Date().getTime()
// document.write(`<h2>Elapsed milliseconds since January 1, 1970: ${milliseconds}</h2>`)

// var minutessince1970 = new Date().getTimezoneOffset()
// var date_3 = new Date()
// var date_3_toString = date_3.toString()
// var date_3_sliced = date_3_toString.slice(3,15)
// var changing_ms = new Date(date_3_sliced).getTime()
// var diff = changing_ms - milliseconds
// var minutes_since1970 = diff/ (1000 * 60 * 60*24)
// document.write(`<h2>Elapsed minutes since January 1, 1970: ${minutes_since1970}</h2>`)
// console.log(diff)

//Q7
var getHour = new Date().getHours()

if (getHour < 12){
    console.log("Its AM")
}else{
    console.log("Its PM")
}

//Q8
var laterDate = new Date("Dec 31 2020")
document.write(`<h2>Later date: ${laterDate} </h2>`)

//Q9
var date_1 = new Date("06/18/2015")
var date_2 = new Date()
var diff = date_2.getTime() - date_1.getTime()
var diff_in_days = Math.floor(diff/(1000*3600*24))
document.write(`<h2>${diff_in_days} days have passed since 1st Ramadan, 2015</h2>`)

//Q10
var reference_date = new Date("Dec 05 2015 22:50:16")
var reference_date_2 = new Date("01/01/2015")
var diff_2 = reference_date.getTime() - reference_date_2.getTime()
var diff_in_seconds = Math.floor(diff_2/(1000*60))
document.write(`<h2>On reference date ${reference_date},<br>${diff_in_seconds} seconds had passed since beginning of 2015</h2>`)

//Q11
var current_time = new Date();
var onehourbeforetime = new Date().getHours() - 1
current_time.setHours(onehourbeforetime);
document.write(`<h2>Current Date: ${new Date()}<br> 1 hour ago, it was ${current_time}</h2>`)

//Q12
var current_time_2 = new Date();
var hundredyearsbeforetime = new Date().getFullYear() - 100
current_time_2.setFullYear(hundredyearsbeforetime);
document.write(`<h2>Current Date: ${new Date()}<br> 100 years back, it was ${current_time_2}</h2>`)

//Q13
var user_age = parseInt(prompt("Enter your age"))
var getBirthYear = new Date().getFullYear() - user_age
document.write(`<h2>Your age is ${user_age}<br>Your birth year is ${getBirthYear}</h2>`) 

//Q14
var customer_name = prompt("Enter your name")
var current_month = prompt("Enter current month")
var number_of_units = 410
var charges_per_unit = 16
var net_amount_payable = number_of_units * charges_per_unit
var late_payment_surcharge = 350
var gross_amount_payable = net_amount_payable + late_payment_surcharge

document.write(`
<h1> K-Electric Bill </h1>

<p> 
Customer Name    : <b>${customer_name}</b>     <br>
Month            : <b>${current_month}</b>     <br>
Number of units  : <b>${number_of_units}</b>   <br>
Charges per unit : <b>${charges_per_unit}</b>  <br>
</p>

<p>
Net Amount Payable (within Due Date) : <b>${net_amount_payable}</b>     <br>
Late payment surcharge               : <b>${late_payment_surcharge}</b> <br>
Gross Amount Payable (after Due Date): <b>${gross_amount_payable}</b>   <br>
</p>
`)

