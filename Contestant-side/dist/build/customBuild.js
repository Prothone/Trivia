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
            break
        case 40:
            document.getElementsByClassName('stay red')[0].setAttribute("disabled", "disabled"); 
            i++;
//            document.getElementByTagName("input[type=range]::-moz-range-thumb").style.background = "blue";
//            document.styleSheets[0].insertRule('input[type=range]::-moz-range-thumb { background: #123; }', 0);
            document.querySelector("input[type=range]::-moz-range-thumb").style.background = 'green';
            break;
    }
};


//$("#slider").slider({
//    max: 10,
//    slide: function (event, ui) {
//        m_val = ui.value;
//        if (m_val < 0) {
//            m_val = 0;
//            $(this).slider({ value: 0 });
//        }
//        $(this).find("a:first").text(m_val);
//    }
//});

var ans = [0,0]
var i=0;

function updateTextInput(z) {
    document.getElementsByClassName("slider")[i].innerHTML = z;
    ans[i] = z;
}

