var score1 = 0;
var score2 = 0;
var i;

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