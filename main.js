canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasaMarsImageArray = ["th_1.jpeg",
                      "th_2.jpeg",
                      "th_3.jpeg",
                      "th_4.jpg",
                      "th_5.jpg"];

randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber)

roverWidth = 100;
roverheight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;

}
function uploadBackground(){
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height)
}
function uploadrover(){

    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverheight)
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38")
    {
        up();
        console.log("up")
    }
    if(keyPressed == "40")
    {
        down();
        console.log("down")
    }
    if(keyPressed == "37")
    {
        left();
        console.log("left")
    }
    if(keyPressed == "39")
    {
        right();
        console.log("right")
    }
}

function up()
{
    if(roverY >=0)
    {
        roverY = roverY - 10;
        console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y = "+ roverY);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(roverY <=500)
    {
        roverY = roverY + 10;
        console.log("Quando a seta para baixo é pressionada, x = " + roverX + " | y = "+ roverY);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(roverX >=0)
    {
        roverX = roverX - 10;
        console.log("Quando a seta para esquerda é pressionada, x = " + roverX + " | y = "+ roverY);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(roverX <=700)
    {
        roverX = roverX + 10;
        console.log("Quando a seta para direita é pressionada, x = " + roverX + " | y = "+ roverY);
        uploadBackground();
        uploadrover();
    }
}

