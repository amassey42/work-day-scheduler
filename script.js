//Gloabl variables
let timeClass = 0;
//save buttons
let nineAmButton = $('#nine-am-button')
let tenAmButton = $('.ten-am-button')
let elevenAmButton = $('.eleven-am-button')
let twelvePmButton = $('.twelve-pm-button')
let onePmButton = $('.one-pm-button')
let twoPmButton = $('.two-pm-button')
let threePmButton = $('.three-pm-button')
let fourPmButton = $('.four-pm-button')
let fivePmButton = $('.five-pm-button')

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
blockColor();


//save list to local storage
//when save button is clicked it saves the line 
nineAmButton.on("click", function(){
    let nineAmText = $('#9Text').val();
    let nineAmTextJson = JSON.stringify(nineAmText);
    localStorage.setItem("9 AM", nineAmTextJson)
})

tenAmButton.on("click", function(){
    let tenAmText = $('#10Text').val();
    let tenAmTextJson = JSON.stringify(tenAmText);
    localStorage.setItem("10 AM", tenAmTextJson)
})
elevenAmButton.on("click", function(){
    let elevenAmText = $('#11Text').val();
    let elevenAmTextJson = JSON.stringify(elevenAmText);
    localStorage.setItem("11 AM", elevenAmTextJson)
})
twelvePmButton.on("click", function(){
    let twelvePmText = $('#12Text').val();
    let twelvePmTextJson = JSON.stringify(twelvePmText);
    localStorage.setItem("12 PM", twelvePmTextJson)
})
onePmButton.on("click", function(){
    let onePmText = $('#13Text').val();
    let onePmTextJson = JSON.stringify(onePmText);
    localStorage.setItem("1 PM", onePmTextJson)
})
twoPmButton.on("click", function(){
    let twoPmText = $('#14Text').val();
    let twoPmTextJson = JSON.stringify(twoPmText);
    localStorage.setItem("2 PM", twoPmTextJson)
})
threePmButton.on("click", function(){
    let threePmText = $('#15Text').val();
    let threePmTextJson = JSON.stringify(threePmText);
    localStorage.setItem("3 PM", threePmTextJson)
})
fourPmButton.on("click", function(){
    let fourPmText = $('#16Text').val();
    let fourPmTextJson = JSON.stringify(fourPmText);
    localStorage.setItem("4 PM", fourPmTextJson)
})
fivePmButton.on("click", function(){
    let fivePmText = $('#17Text').val();
    let fivePmTextJson = JSON.stringify(fivePmText);
    localStorage.setItem("5 PM", fivePmTextJson)
})


//when page is refreshed it pulls local storage and places what is saved back into its position. 
//each line is saved differently in local storage
function retriveLocalStorage(){
    let nineAmSaved = JSON.parse(localStorage.getItem('9 AM'))
    $('#9Text').append(nineAmSaved);
    let tenAmSaved = JSON.parse(localStorage.getItem('10 AM'))
    $('#10Text').append(tenAmSaved);
    let elevenAmSaved = JSON.parse(localStorage.getItem('11 AM'))
    $('#11Text').append(elevenAmSaved);
    let twelvePmSaved = JSON.parse(localStorage.getItem('12 PM'))
    $('#12Text').append(twelvePmSaved);
    let onePmSaved = JSON.parse(localStorage.getItem('1 PM'))
    $('#13Text').append(onePmSaved);
    let twoPmSaved = JSON.parse(localStorage.getItem('2 PM'))
    $('#14Text').append(twoPmSaved);
    let threePmSaved = JSON.parse(localStorage.getItem('3 PM'))
    $('#15Text').append(threePmSaved);
    let fourPmSaved = JSON.parse(localStorage.getItem('4 PM'))
    $('#16Text').append(fourPmSaved);
    let fivePmSaved = JSON.parse(localStorage.getItem('5 PM'))
    $('#17Text').append(fivePmSaved);
}





retriveLocalStorage();
