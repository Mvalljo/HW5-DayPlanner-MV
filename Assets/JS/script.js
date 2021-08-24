var timeDisplayEl = $('#currentDay');
var timeBlockC = $('.container');

// Shows current day
var rightNow = moment().format('dddd, MMMM Do');
timeDisplayEl.text(rightNow);
// timeblock with standard bussiness hour

//timeblock color coded whether past,present,or future

//click event on timeblock-> enter an event

//save btn on that click event then saved to local storage

//saved events dont go away when refreshed
