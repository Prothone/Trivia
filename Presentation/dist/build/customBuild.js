var score1 = 0;
var score2 = 0;
var i;
var wrongL = [0,0,0,0,0,0];
var w;
var count;

for(i=0;i<5;i++)
{
    document.getElementsByClassName("score1")[i].innerHTML = score1;
    document.getElementsByClassName("score2")[i].innerHTML = score2;
}

function incrementValue1()
{
    score1 = score1 + 5;
    for(i=0;i<5;i++)
    {
        document.getElementsByClassName("score1")[i].innerHTML = score1;
    }
    
}
function incrementValue2()
{
    score2 = score2 + 5;
    for(i=0;i<5;i++)
    {
        document.getElementsByClassName("score2")[i].innerHTML = score2;
    }
}

function SelectedC(){
    document.getElementsByClassName("correct")[0].className =
    document.getElementsByClassName("correct")[0].className.replace('correct', 'correctSelected' )
    document.getElementById('correct').play();
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
    document.getElementById('wrong').play();
}