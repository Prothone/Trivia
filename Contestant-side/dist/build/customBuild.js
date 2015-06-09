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

var ans = [0,0,0,0,0,0]
var i=0;


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 13:
            document.getElementById('buzzer').play();
            for(i=0;i<10;i++)
            {
                buzzingRed();
            }
            break;
            
        case 16:
            document.getElementById('buzzer').play();
            for(i=0;i<10;i++)
            {
                buzzingBlue();
            }
            break;
    }
};


function buzzingRed() {
    document.getElementsByClassName("buzzpage")[0].className =
        document.getElementsByClassName("buzzpage")[0].className.replace('buzzpage', 'buzzpagered' );
    document.getElementsByClassName("buzz")[0].className =
        document.getElementsByClassName("buzz")[0].className.replace('buzz', 'buzzPressed' )
        
    setTimeout(function() {
    document.getElementsByClassName("buzzpagered")[0].className =
        document.getElementsByClassName("buzzpagered")[0].className.replace('buzzpagered', 'buzzpage' );
    document.getElementsByClassName("buzzPressed")[0].className =
        document.getElementsByClassName("buzzPressed")[0].className.replace('buzzPressed', 'buzz' );
    }, 1556);
}

function buzzingBlue() {
    document.getElementsByClassName("buzzpage")[0].className =
        document.getElementsByClassName("buzzpage")[0].className.replace('buzzpage', 'buzzpageblue' )
    document.getElementsByClassName("buzz")[0].className =
        document.getElementsByClassName("buzz")[0].className.replace('buzz', 'buzzPressed' )
        
    setTimeout(function() {
    document.getElementsByClassName("buzzpageblue")[0].className =
        document.getElementsByClassName("buzzpageblue")[0].className.replace('buzzpageblue', 'buzzpage' );
    document.getElementsByClassName("buzzPressed")[0].className =
        document.getElementsByClassName("buzzPressed")[0].className.replace('buzzPressed', 'buzz' );
    }, 1556);
            
}

var green=0;

function inputRed(k,answ){
    document.getElementsByClassName('red')[0].setAttribute("disabled", "disabled");
    document.getElementsByClassName('ansred')[0].innerHTML = k + " ("+(answ-k)+")";
    document.getElementsByClassName("lockRed")[0].className =
    document.getElementsByClassName("lockRed")[0].className.replace('lockRed', 'lockedRed' );
    ans[0]=k;
    green++;
    check(Math.abs(answ-ans[0]),Math.abs(answ-ans[1]));
}
function inputBlue(k,answ){
    document.getElementsByClassName('blue')[0].setAttribute("disabled", "disabled");
    document.getElementsByClassName('ansblue')[0].innerHTML = k + " ("+(answ-k)+")";
    document.getElementsByClassName("lockBlue")[0].className =
    document.getElementsByClassName("lockBlue")[0].className.replace('lockBlue', 'lockedBlue' );
    ans[1]=k;
    green++;
    check(Math.abs(answ-ans[0]),Math.abs(answ-ans[1]));
}

function check(r,b){
    if(r>b)
    {
        document.getElementsByClassName('vCloser')[0].innerHTML = '<a style="color:blue;">BLUE!</a>';
    }
    else if(r==b)
    {
        document.getElementsByClassName('vCloser')[0].innerHTML = '<a style="color:red;">RED</a>'+' \& '+' <a style="color:blue;">BLUE</a>'+'!';
    }
    else
    {
        document.getElementsByClassName('vCloser')[0].innerHTML = '<a style="color:red;">RED!</a>';
    }
    
    if(green==2)
    {
        setTimeout(function() {
        document.getElementsByClassName('kosong')[0].innerHTML = '<input type="range" class="green" min="4000" max="10000" value="8848" disabled="disabled">';
        }, 5000);
        
    }
}