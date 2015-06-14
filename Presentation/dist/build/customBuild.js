var score1 = 0;
var score2 = 0;
var i;
var wrongL = [0,0,0,0,0,0,0,0,0,0,0,0];
var swapList = [1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,2,0,0,0,1,1,0,1,2,0,0,0,1,0,2,0,0,0,1,1,1,0,2,0,0,0,1,1,1,1,1,0,2,0,0,0,1,1,1,1,1,0,0,2,0,0,0,1,1,1,1,1,0,2,0,0,0,1,1,1,0,2,0,0,0,1,0,2,0,0,0,1,1,1,1,1,0,0,2,0,0,0,1,0,0]
var w;
var count;
var swap=0;

function playM(id) {
    document.getElementById(id).pause();
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
}
function stopM(id) {
    document.getElementById(id).pause();
    document.getElementById(id).currentTime = 0;
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 66: //B
            playM('badumtss');
            break;
        case 78: //N
            playM('end');
            break;
        case 77: //M
            stopM('end');
            break;
        case 76: //L
            playM('nextQ');
            break;
        case 74: //J
            playM('rules');
            break;
        case 75: //K
            stopM('rules');
            break;
        case 85: //U
            playM('drumRoll');
            break;
        case 73: //I
            stopM('drumRoll');
            playM('drumRollF');
            break;
        case 90: //Z
            stopM('clap');
            playM('clap');
            break;
        case 81: //Q
            playM('expl');
            break;
        case 87: //W
            stopM('expl');
            break;
        case 80: //P
            playM('QM');
            break;
        case 69: //E
            playM('ask');
            break;
        case 82: //R
            stopM('ask');
            break;
        case 65: //Q
            playM('ans');
            break;
        case 83: //W
            stopM('ans');
            break;
        case 37: //Left
            swap--;
            switch(swapList[swap]) {
            case 1:
                stopM('swap');
                playM('swap');
                break;
            }
            break;
        case 39: //Right
            swap++;
            switch(swapList[swap]) {
            case 1:
                stopM('swap');
                playM('swap');
                break;
            case 2:
                stopM('nextQ');
                playM('nextQ');
                break;
            }
            break;
    }
};

for(i=0;i<20;i++)
{
    document.getElementsByClassName("score1")[i].innerHTML = score1;
    document.getElementsByClassName("score2")[i].innerHTML = score2;
}

function incrementValue1()
{
    score1 = score1 + 5;
    for(i=0;i<20;i++)
    {
        document.getElementsByClassName("score1")[i].innerHTML = score1;
    }
    playM('score');
}
function incrementValue2()
{
    score2 = score2 + 5;
    for(i=0;i<20;i++)
    {
        document.getElementsByClassName("score2")[i].innerHTML = score2;
    }
    playM('score');
}

function SelectedC(){
    document.getElementById('audioCorrect').play();
    document.getElementsByClassName("correct")[0].className =
    document.getElementsByClassName("correct")[0].className.replace('correct', 'correctSelected' )
    var c;
    for(c=1;c<9;c+=2)
    {
        anim(c);
    }
}

function anim(i){
    var n = i*200;
    setTimeout(function() {
        document.getElementsByClassName("correctSelected")[0].className =
        document.getElementsByClassName("correctSelected")[0].className.replace('correctSelected', 'white' )
    }, n);
    setTimeout(function() {
        document.getElementsByClassName("white")[0].className =
        document.getElementsByClassName("white")[0].className.replace('white', 'correctSelected' )
    }, n+200);
}

function SelectedW(id){
    w=0;
    count=0;
    while(w<id)
    {
        if(wrongL[w] == 1)
        {
            count++;
        }
        w++;
    }
    wrongL[id]= 1;
    document.getElementsByClassName("wrong")[id-count].className =
    document.getElementsByClassName("wrong")[id-count].className.replace('wrong', 'wrongSelected' )
    document.getElementById('audioWrong').play();
}

function lock() {
    document.getElementById('audioLock').pause();
    document.getElementById('audioLock').currentTime = 0;
    document.getElementById('audioLock').play();
}