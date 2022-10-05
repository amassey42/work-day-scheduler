//Gloabl variables
let timeClass = 9

//date 
function displayTime(){
let currentDay = moment().format("MMM Do YYYY")
$("#currentDay").text(currentDay)
}
setInterval(displayTime, 1)


//changes the colors of the blocks depending on the time
function blockColor(){
let currentTime = moment().hours()
console.log(currentTime)

    while (currentTime > timeClass) {
    $(`#${timeClass}`).addClass("past")
    timeClass++
    }
    while (currentTime == timeClass) {
    $(`#${timeClass}`).addClass("present")
    timeClass++
    } 
    while (currentTime <= timeClass && timeClass <= 17) {
    $(`#${timeClass}`).addClass("future")
    timeClass++
    }
}

blockColor()