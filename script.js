//Gloabl variables
let timeClass = 0;
let nineAmButton = $('#nine-am-button')
let tenAmButton = $('#ten-am-button')
let elevenAmButton = $('#eleven-am-button')
let twelvePmButton = $('#twelve-pm-button')
let onePmButton = $('#one-pm-button')
let twoPmButton = $('#two-pm-button')
let threePmButton = $('#three-pm-button')
let fourPmButton = $('#four-pm-button')
let fivePmButton = $('#five-pm-button')

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
//tells the block color to fire
blockColor()


//save list to local storage
//when save button is clicked it saves the line 

//each line is saved differently in local storage


//when page is refreshed it pulls local storage and places what is saved back into its position. 