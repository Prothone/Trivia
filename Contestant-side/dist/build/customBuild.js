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
        case 13:
            document.getElementById('buzzer').play();
            document.getElementsByClassName("buzzpage")[0].className =
    document.getElementsByClassName("buzzpage")[0].className.replace('buzzpage', 'buzzpagered' )
//            for(i=0;i<5;i++)
//            {
//                document.getElementsByClassName("buzzpagered")[i].innerHTML = 'Red';
//            }
            setTimeout(function() {
            document.getElementsByClassName("buzzpagered")[0].className =
    document.getElementsByClassName("buzzpagered")[0].className.replace('buzzpagered', 'buzzpage' )
        }, 1556);
            break;
            
        case 16:
            document.getElementById('buzzer').play();
            document.getElementsByClassName("buzzpage")[0].className =
    document.getElementsByClassName("buzzpage")[0].className.replace('buzzpage', 'buzzpageblue' )
//            for(i=0;i<5;i++)
//            {
//                document.getElementsByClassName("buzzpageblue")[i].innerHTML = 'Blue';
//            }
            setTimeout(function() {
            document.getElementsByClassName("buzzpageblue")[0].className =
    document.getElementsByClassName("buzzpageblue")[0].className.replace('buzzpageblue', 'buzzpage' )
        }, 1556);
            break;
    }
};


var ans = [0,0]
var i=0;

function updateTextInput(z) {
    document.getElementsByClassName("slider")[i].innerHTML = z;
    ans[i] = z;
}

function inputRed(k){
    document.getElementsByClassName('s1 red')[0].setAttribute("disabled", "disabled");
    document.getElementById('zz').innerHTML = k;
    document.getElementsByClassName('ansred')[0].innerHTML = k + " ("+(12-k)+")";
}
function inputBlue(k){
    document.getElementsByClassName('s2 blue')[0].setAttribute("disabled", "disabled");
    document.getElementById('zzz').innerHTML = k;
    document.getElementsByClassName('ansblue')[0].innerHTML = k + " ("+(12-k)+")";
}