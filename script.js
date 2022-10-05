//Gloabl variables




//date and time
function displayTime(){
let currentDateTime = moment().format("MMM Do YYYY hh:mm:ss A")
$("#currentDay").text(currentDateTime)
}

setInterval(displayTime, 1000)