var timeDisplayEl = $('#currentDay');
var timeBlockC = $('.container');
var saveBtn = $('.saveBtn');


// Shows current day
var rightNow = moment().format('dddd, MMMM Do');
timeDisplayEl.text(rightNow);

//timeblock color coded whether past,present,or future
function colorCode() {
    var currentTime = parseInt(moment().format('H'));
    var timeIds = new Array();
    $(".time-block").each(function () {
        timeIds.push(this.id);

    });
    for (let i = 0; i < timeIds.length; i++) {
        if (parseInt(timeIds[i]) < currentTime) {
            $("#" + timeIds[i]).addClass('past');
        } else if (parseInt(timeIds[i]) === currentTime) {
            $("#" + timeIds[i]).addClass('present');
        } else if (parseInt(timeIds[i]) > currentTime) {
            $("#" + timeIds[i]).addClass('future');
        }
    }
}
colorCode();

//Page refreshes after hour changes
setInterval(myTimer, 1000);
function myTimer() {
    var time = moment().format('mm:ss');
    if (time === "00:00") {
        location.reload();
    }
}

//click event on timeblock-> enter an event then saved to local storage
var txt = new Array();
var textIds = new Array();
var text = [];

$(".description").each(function () {
    textIds.push(this.id);
});

saveBtn.on('click', function () {
    for (let i = 0; i < textIds.length; i++) {
        var decription = $('#' + textIds[i]).val();
        text.push(decription);
    }
    var eventTxt = { text };
    localStorage.setItem('event', JSON.stringify(eventTxt));
});

//saved events dont go away when refreshed
var retrieveEvent = localStorage.getItem('event');
var objectEvent = JSON.parse(retrieveEvent);

$(".time-block").each(function () {
    if (objectEvent !== null) {
        for (let b = 0; b < 9; b++) {
            var eve = objectEvent.text[b];
            if (eve !== "") {
                $(this).children("#" + textIds[b]).val(eve);
            }
        }
    }
});