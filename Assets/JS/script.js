var timeDisplayEl = $('#currentDay');
var timeBlockC = $('.container');


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
            $("#"+timeIds[i]).addClass('past');
            console.log(timeIds[i]);
            console.log(currentTime);
        } else if (parseInt(timeIds[i]) === currentTime) {
            $("#"+timeIds[i]).addClass('present');
            console.log(timeIds[i]);
            console.log(currentTime);
        } else if (parseInt(timeIds[i]) > currentTime){
            $("#"+timeIds[i]).addClass('future');
            console.log(timeIds[i]);
            console.log(currentTime);
        }
       
    }
    
    
}

colorCode();
//click event on timeblock-> enter an event

//save btn on that click event then saved to local storage

//saved events dont go away when refreshed
