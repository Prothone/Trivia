//document.onkeydown = checkKey;

//function checkKey(e) {
//    e = e || window.event;
//    if(e.keyCode == 38) {
//        document.getElementById('buzzer').play();
//    }
//    else if(e.keyCode == '40') {
//        document.getElementById('buzzer').play();
//    }
//}


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            document.getElementById('buzzer').play();
            document.getElementsByClassName("buzzpage")[0].className =
    document.getElementsByClassName("buzzpage")[0].className.replace('buzzpage', 'buzzpagered' )
            setTimeout(function() {
            document.getElementsByClassName("buzzpagered")[0].className =
    document.getElementsByClassName("buzzpagered")[0].className.replace('buzzpagered', 'buzzpage' )
        }, 1000);
            break;
        case 40:
            document.getElementById('buzzer').play();
            document.getElementsByClassName("buzzpage")[0].className =
    document.getElementsByClassName("buzzpage")[0].className.replace('buzzpage', 'buzzpageblue' )
            setTimeout(function() {
            document.getElementsByClassName("buzzpageblue")[0].className =
    document.getElementsByClassName("buzzpageblue")[0].className.replace('buzzpageblue', 'buzzpage' )
        }, 1000);
            break;
    }
};