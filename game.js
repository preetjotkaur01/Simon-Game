var color =["p","y","b","o"];
var gamePattern = [];
var userClickedPattern=[];
 var num;
 var colorSelected;
 var userChosenColor;
 var start = 0;
 var level = 0;


//random number
 function nextSequence(){
    userClickedPattern=[];
    level=level+1;
    num = Math.floor(Math.random()*3);
    colorSelected = color[num];
    gamePattern.push(colorSelected);
    $("h2").text("Level "+ level);
    gameAnimation(colorSelected);
    makeSound(colorSelected);
    
    }


 // start of the game 
 $(document).on("keypress",function(){
    if(start===0)
    {
    nextSequence();
    start=1;
    }
});

// when user clicks a button
$("button").on("click",function(){
   userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);   
   makeSound(userChosenColor);
   makeAnimate(userChosenColor);
   checkAnswer(userClickedPattern.length-1);     
});

function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) 
        {
         if(userClickedPattern.length === gamePattern.length)
         {
        setTimeout(function()
        {
            nextSequence();
        },900);
         }

       }

        else
        {
         $("h1").text("GAME OVER");
         $("h2").text("Your Score : " +level);
         startOver();
    
        }
}

function startOver()
{
    $("h2").text("press any key to start again !")
    level=0;
    start=0;
    gamePattern=[];
   
}



function gameAnimation(colorSelected)
{
     $("#" + colorSelected).fadeIn(250).fadeOut(250).fadeIn(250);
}


function makeAnimate(colorSelected){
var active = $("#"+colorSelected).addClass("pressed");
    setTimeout(function(){
        active.removeClass("pressed");
    },200);
}

function makeSound(colorSelected)
{
    switch(colorSelected)
    {
        case "p":
            var s1= new Audio("green.mp3");
            s1.play();
            break;

            case "y":
            var s2= new Audio("red.mp3");
            s2.play();
            break;

            case "b":
            var s3= new Audio("yellow.mp3");
            s3.play();
            break;

            case "o":
            var s4= new Audio("blue.mp3");
            s4.play();
            break;

            default:
            var s5= new Audio("wrong.mp3");
            s5.play();
            break;

    }
}

