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
//click event on timeblock-> enter an event
//save btn on that click event then saved to local storage
var txt = new Array();
var textIds = new Array();
var text= [];
saveBtn.on('click', function () {
    $(".description").each(function () {
        textIds.push(this.id);

    });
    for (let i = 0; i < textIds.length; i++) {
        var decription = $('#' + textIds[i]).val();
        text.push(decription);
    }
    var eventTxt = {
        textIds,
        text,
    }

    window.localStorage.setItem('event', JSON.stringify(eventTxt));
});
//saved events dont go away when refreshed
var retrieveEvent = localStorage.getItem('event');
var objectEvent = JSON.parse(retrieveEvent);


console.log(objectEvent.textIds[0]);
console.log(objectEvent.text[0]);


