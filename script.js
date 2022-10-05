//date and time
function displayTime(){
var dateTime = moment().format("MMM Do YYYY hh:mm:ss A")
$("#currentDay").text(dateTime)
console.log(dateTime)
}

setInterval(displayTime, 1000)