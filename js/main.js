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
    iconOnVideo('heart');
    setTimeout(function(){iconOnVideo('heart');}, 50);
    setTimeout(function(){iconOnVideo('heart');}, 250);
    setTimeout(function(){iconOnVideo('heart');}, 450);
    setTimeout(function(){iconOnVideo('heart');}, 550);
    setTimeout(function(){iconOnVideo('heart');}, 750);
    setTimeout(function(){iconOnVideo('heart');}, 950);
    displayMessage($(id).children('.name').html(), '<span class="icon ' + type.substr(1) + '"></span>');
}

function displayMessage(who, what){
    var d = new Date();
    var h = d.getHours();
    var mn = d.getMinutes();
    mn = mn < 10 ? '0' + mn : mn;
    time = h + ':' + mn;
    $('#messages').append('<li>' + '<span class="time">[' + time + ']</span> <span class="user">' + who + '</span>: ' + what + '</li>');
}

$(document).ready(function () {
    $('video').children('iframe')
    countdown("countdown", 0, 3, function () {
        $(".left.video").show();
        $("#countdown").hide();
        $(".connections").fadeIn();
    } );

    countdown("fake-count", 0, 6, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 8, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 10, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 11, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );

    countdown("fake-count", 0, 20, function () {
        $('.live li.hidden').first().fadeIn('slow').removeClass('hidden');
    } );
    setTimeout(function(){
        matchAction('#match-2', '.icon-star-full');
    }, 21000);
    setTimeout(function(){
        matchAction('#match-3', '.icon-heart');
    }, 26000);
    setTimeout(function(){
       displayMessage('Marie', 'Where do you live?');
    }, 12000);
    setTimeout(function(){
       displayMessage('Marie', 'Do you like the Black Keys?');
    }, 30000);
    setTimeout(function(){
       displayMessage('Agathe', 'Are you married?');
    }, 16000);
    setTimeout(function(){
       matchAction('#match-1', '.icon-heart');
    }, 42000);
    setTimeout(function(){
       matchAction('#match-4', '.icon-heart');
    }, 55000);
    setTimeout(function(){
        $('.hearts').removeClass('hide');
    }, 10000);

    // define a function to run in the callback
    window.hackathon_dle_callback = function(data){
        if (data.properties['5046'] == "block") {
            $("#block").show();
        } else if (data.properties['5046'] == "allow") {
            console.log('allowed');
            $("#confirm-join-button").click();
        }
    };
});
