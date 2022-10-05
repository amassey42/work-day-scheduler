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
    $(`#${timeClass}`).css("background-color", "#d3d3d3")
    timeClass++
}
while (currentTime == timeClass) {
    $(`#${timeClass}`).css("background-color", "#ff6961")
    timeClass++
} 
while (currentTime <= timeClass && timeClass <= 17) {
    $(`#${timeClass}`).css("background-color", "#77dd77")
    timeClass++
}

}

blockColor()