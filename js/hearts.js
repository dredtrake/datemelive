$(".viewer-action").on("click", function() {
    var item = $(this).attr('id');
    
    var nbToRemove = (item == 'heart') ? 3 : 1;
    var nbCredits = parseInt(document.getElementById('remaining-credits').innerText);
    var newTotal = nbCredits - nbToRemove;
    
    if (newTotal < 0) {
    	newTotal = 0;
    }
	document.getElementById('remaining-credits').innerText = newTotal;
	
	if (newTotal > 0) {
		iconOnVideo(item);
	}
    
});

function iconOnVideo(item){
    var b = Math.floor((Math.random() * 100) + 1);
    var d = ["flowOne", "flowTwo", "flowThree", "flowFour", "flowFive", "flowSix"];
    var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
    var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);
    $('<div class="heart part-' + b + " " + a[Math.floor((Math.random() * a.length))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 22) + 'px;"><i class="icon icon-' + item + '"></i></div>').appendTo(".hearts").css({
        animation: "" + d[Math.floor((Math.random() * d.length))] + " " + c + "s linear"
    });
    $(".part-" + b).show();
    setTimeout(function() {
        $(".part-" + b).remove()
    }, c * 900);
}


function removeCredits(nbToRemove) {
	
}