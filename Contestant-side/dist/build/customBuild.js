var ans = [0,0,0,0,0,0]
var i=0;
var dummyBuzz=0;

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 13:
            if(dummyBuzz==0)
            {
                document.getElementById('dummybuzz').play();
                dummyBuzz++;
            }
            else if(dummyBuzz==1)
            {
                document.getElementById('dummybuzz2').play();
                dummyBuzz++;
            }
            else {
                document.getElementById('buzzer').play();
            }
            for(i=0;i<10;i++)
            {
                buzzingRed();
            }
            break;
        case 16:
            if(dummyBuzz==0)
            {
                document.getElementById('dummybuzz').play();
                dummyBuzz++;
            }
            else if(dummyBuzz==1)
            {
                document.getElementById('dummybuzz2').play();
                dummyBuzz++;
            }
            else {
                document.getElementById('buzzer').play();
            }
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

var green = 0;
var greenFlag = 0;
var Qnumber = 0;

function inputRed(k,answ){
    document.getElementsByClassName('red')[Qnumber].setAttribute("disabled", "disabled");
    document.getElementsByClassName('ansred')[Qnumber].innerHTML = k + " ("+(answ-k)+")";
    document.getElementsByClassName("lockRed")[0].className =
    document.getElementsByClassName("lockRed")[0].className.replace('lockRed', 'lockedRed' );
    ans[2*Qnumber]=k;
    green++;
    check(Math.abs(answ-ans[2*Qnumber]),Math.abs(answ-ans[2*Qnumber+1]));
}
function inputBlue(k,answ){
    document.getElementsByClassName('blue')[Qnumber].setAttribute("disabled", "disabled");
    document.getElementsByClassName('ansblue')[Qnumber].innerHTML = k + " ("+(answ-k)+")";
    document.getElementsByClassName("lockBlue")[0].className =
    document.getElementsByClassName("lockBlue")[0].className.replace('lockBlue', 'lockedBlue' );
    ans[2*Qnumber+1]=k;
    green++;
    check(Math.abs(answ-ans[2*Qnumber]),Math.abs(answ-ans[2*Qnumber+1]));
}

function check(r,b){
    if(r>b)
    {
        document.getElementsByClassName('vCloser')[Qnumber].innerHTML = '<a style="color:blue;">BLUE!</a>';
    }
    else if(r==b)
    {
        document.getElementsByClassName('vCloser')[Qnumber].innerHTML = '<a style="color:red;">RED</a>'+' \& '+' <a style="color:blue;">BLUE</a>'+'!';
    }
    else
    {
        document.getElementsByClassName('vCloser')[Qnumber].innerHTML = '<a style="color:red;">RED!</a>';
    }
    
    if(green==2)
    {
        switch(Qnumber)
        {
            case 0:
                setTimeout(function() {
                document.getElementsByClassName('kosong')[Qnumber].innerHTML = '<input type="range" class="green" min="4000" max="10000" value="8848" disabled="disabled">';
                }, 1000);
                break;
            case 1:
                setTimeout(function() {
                document.getElementsByClassName('kosong')[Qnumber].innerHTML = '<input type="range" class="green" min="1" max="30" value="6" disabled="disabled">';
                }, 1000);
                break;
            case 2:
                setTimeout(function() {
                document.getElementsByClassName('kosong')[Qnumber].innerHTML = '<input type="range" class="green" min="1990" max="2020" value="2008" disabled="disabled">';
                }, 1000);
                break;
        }
        setTimeout(function() {
                Qnumber++;
                green =0;
                }, 1100);
    }
}