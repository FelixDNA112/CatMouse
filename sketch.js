var cat, mouse;
var catImg, catImg2, mouseImg, mouseImg2;

function preload() {
    catImg=loadImage("images/cat2.png")
    catImg2=loadImage("images/cat3.png")
    mouseImg=loadImage("images/mouse3.png")
    mouseImg2=loadImage("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(900,400,50,50)
    cat.addImage(catImg)
    cat.scale=0.25
    mouse = createSprite(100,400,50,50)
    mouse.addImage(mouseImg)
    mouse.scale = 0.25

}

function draw() {
    background(0);

    if (cat.isTouching(mouse)){
        cat.addImage(catImg2) 
        mouse.addImage(mouseImg2)
    }

    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
    }

    if(keyCode === RIGHT_ARROW){
        cat.velocityX = 0;
    }


}
