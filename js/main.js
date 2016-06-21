function countdown(elementName, minutes, seconds, callback) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            callback()
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

function matchAction(id, type) {
    $(id).children('.notif').children(type).addClass('checked');
    displayMessage($(id).children('.name').html(), '<span class="icon ' + type.substr(1) + '"></span>');
}

function displayMessage(who, what){
    var d = new Date();
    var h = d.getHours();
    var mn = d.getMinutes();
    mn = mn < 10 ? '0' + mn : mn;
    time = h + ':' + mn;
    $('#messages').append('<li>' + '<span class="time">[' + time + ']</span> <span class="user">' + who + '</span> | ' + what + '</li>');
}

$(document).ready(function () {
    countdown("countdown", 0, 3, function () {
        $(".left.video").show();
        $("#countdown").hide();
        $(".connections").fadeIn();
    } );

    countdown("fake-count", 0, 7, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 9, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 12, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 12, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 30, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );
    setTimeout(function(){
        matchAction('#match-2', '.icon-star-full');
    }, 25000);
    setTimeout(function(){
        matchAction('#match-3', '.icon-heart');
    }, 32000);

    // define a function to run in the callback
    window.hackathon_dle_callback = function(data){
        if (window.utag_data.adblock_status == "block") {
            console.log('detected AD block!!!!!');
        } else if (window.utag_data.adblock_status == "allow") {
            console.log('allowed');
        }
    };
});
