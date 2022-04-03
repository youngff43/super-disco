//Display todays time and date at the top//
var todaysDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todaysDateTime);

//function to save text//
$(document).ready(function() {
$(".saveButton").on("click", function () {
var task = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

//adds to lcocal storage//
localStorage.setItem(task,time);
})

//function for number of hours//
function hourTracker() {
    var currentTime = moment().hour();

    //adding the loop//
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split(hour)[1]);

        //Checking the hour and adding the classes//
            //past//
        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
            //present//
        else if (blockTime === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }

            //Future//
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
})