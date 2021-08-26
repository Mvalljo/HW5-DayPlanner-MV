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

//saved events dont go away when refreshed
$(".time-block").each(function () {
    var id = $(this).attr("id");
    var eventTxt = localStorage.getItem(id);

    if (eventTxt !== null) {
        $(this).children(".description").val(eventTxt);
    }
});

//click event on timeblock-> enter an event then saved to local storage
saveBtn.on('click', function () {
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val())

});
