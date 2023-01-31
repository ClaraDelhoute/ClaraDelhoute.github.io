var img = document.getElementById("img"); 

const imgJump = new Image();
imgJump.src ="photo/jump.png";

const cycleLoop=[0,1,2,3,4,5,6,7,8];
const scale=0.8;
const width=138;
const height=138;
let currentLoopIndex=0;
const scaleWidth=scale * width; 
const scaleHeight= scale * height; 

class Player {

    constructor(position)
     
    {
        this.position = position; 
          
        this.velocity = { //vitesse
            x : 0, 
            y : 1,
        }
    this.height=100;    
    this.width=130;
    this.hitbox= {
        position : 
        {
            x: this.position.x, 
            y:this.position.y,
        },
        height:10, 
        width:10
    }
    this.totalPoints=0;
    }
    draw()
    {
        var date = Date.now();
        while (Date.now() - date <30) {

        }
      
        if (keys.ArrowLeft.pressed==true) {
           
        }
           
        else if (keys.ArrowRight.pressed) {
          /*  c.drawImage(img,currentLoopIndex*95+currentLoopIndex*33,0,130,height,this.position.x,this.position.y,scaleWidth,scaleWidth);
        currentLoopIndex++;
        if(currentLoopIndex>= cycleLoop.length)
        {
                currentLoopIndex = 0; 
        } */
        }
        else {
            currentLoopIndex =0;
        }
        if(keys.Space.pressed){
            c.drawImage(imgJump,currentLoopIndex*95+currentLoopIndex*32,0,138,height,this.position.x,this.position.y,scaleWidth,scaleHeight);
            

        }else{
        c.drawImage(img,currentLoopIndex*95+currentLoopIndex*33,0,138,height,this.position.x,this.position.y,scaleWidth,scaleHeight);
        currentLoopIndex++;}
        if(currentLoopIndex>= cycleLoop.length)
             {
                currentLoopIndex = 0; 
             } 
        }
    


    score() //fonction permettant de définir le score
    {
        
        c.fillStyle="blue";
        c.font="45px verdana";
        c.fillText(player.totalPoints,1700,50); 
    }
    
    update()
    {
        this.score();//appelle la fonction score()
        this.updateHitBox(); 

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        {
            this.velocity.y += gravity; 
        }
        else this.velocity.y=0
    }
    updateHitBox(){
        this.hitbox= {
            position : 
            {
                x: this.position.x+ 15, 
                y:this.position.y + 15,
            },
            height:80, 
            width:70,
        }
    }
}

