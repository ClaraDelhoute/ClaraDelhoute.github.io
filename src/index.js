
const canvas=document.querySelector("canvas"); //Selectionne la balise canvas 
const c=canvas.getContext("2d"); // retourne un contexte de dessin sur le canevas
canvas.width=1850; //Dimension du canvas
canvas.height=940; //Dimension du canvas


const scale=0.8;
const width=138;
const height=138;
const scaleWidth=scale * width; 
const scaleHeight= scale * height; 
const cycleLoop=[0,1,2,3,4,5,6,7,8];
let currentLoopIndex=0;
var direction = "right"; 
var img = document.getElementById("img"); 
var img2=document.getElementById("img2");
var fond=document.getElementById("fond");
var imagePlatform=document.getElementById("platform");
const gravity=0.6; //Decription de la gravité du jeu
var totalPoints=0 //variable de points
//Création de la classe joueur
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
    }
    draw()
    {
        var date = Date.now();
        while (Date.now() - date <25) {

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
        direction="right";

        c.drawImage(img,currentLoopIndex*95+currentLoopIndex*33,0,138,height,this.position.x,this.position.y,scaleWidth,scaleHeight);
        currentLoopIndex++;
        if(currentLoopIndex>= cycleLoop.length)
             {
                currentLoopIndex = 0; 
             } 
        }
    


    score() //fonction permettant de définir le score
    {
        
        c.fillStyle="blue";
        c.font="45px verdana";
        c.fillText(totalPoints,1700,50); 
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
                x: this.position.x+15, 
                y:this.position.y + 15,
            },
            height:80, 
            width:70,
        }
    }
}

class Plateform {
    constructor({x,y})
    {
        this.position=
        {
        x,
        y,
        }
        this.width=370;
        this.height=60;
    }
    draw()
    {
        
        c.drawImage(imagePlatform,this.position.x,this.position.y,this.width,this.height);
    }
}


function collisionPlatform(platform, player)
{
    if(player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y && 
        player.position.x + player.width  >= platform.position.x +55 && 
        player.position.x  <= platform.width + platform.position.x -190){
  
        return true;
         
        
    }
} 
class Enemy {
    constructor({x,y})
    {
        this.position = {
            x,
            y,
        }
        this.velocity = 
        {
            x:-0.5,
            y:0,
        }
        this.height=100;
        this.width=100; 
        this.hitbox= {
            position : 
            {
                x: this.position.x, 
                y: this.position.y,
            },
            height:10, 
            width:10
        }
    }
    draw()
    {
        c.fillStyle="red"; 
        c.fillRect(this.position.x, this.position.y,this.width,this.height-5);
    }
    updateEnemy()
    {  
       // this.position.x+=this.velocity.x
        this.updateHitBox();
        this.dead();
        this.position.y += this.velocity.y;
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        {
            this.velocity.y += gravity; 
        }
        else this.velocity.y=0
    }
    updateHitBox()
    {
        this.hitbox= {
            position : 
            {
                x : this.position.x, 
                y :this.position.y+40,
            },
            height:100, 
            width:100
        }
    }
    dead()
    {
        enemies.forEach(enemie =>
            {
                
            
            if(collisionEnemy(player,enemie))
            {
                
                this.position.x=-1250;
                this.position.y=-950;
                player.velocity.y +=gravity
                totalPoints += 10;
            
        }
        })
    }
}
       




const player = new Player(
    {
        x : 1,
        y: 0,
        
    },
)

const keys = //définition des clés du clavier
{
    ArrowRight:
    {
        pressed : false
    },
    ArrowLeft: {
        pressed: false
    },
    Space : 
    {
        pressed : false
    },
}

const platforms = [new Plateform({x:256,y: 750}),new Plateform({x:498,y:520}),new Plateform({x:898,y:656})]

const enemies = [new Enemy({x:754,y:825}) /*, new Enemy({x:658,y:518})*/]



function collisionEnemy(player,enemy)
{
    if(player.position.y + player.height <=enemy.position.y && 
        player.position.y + player.height + player.velocity.y >= enemy.position.y && 
        player.position.x + player.width  >= enemy.position.x && 
        player.position.x  <= platform.width + enemy.position.x )
    {
        return true;
    }
    else return false; 
}

var game ="notOver";




function animate() //animation loop
{  
   
    
    window.requestAnimationFrame(animate);

    /*
     indique au navigateur qu'on souhaite exécuter une animation 
     et demande que celui-ci exécute une fonction spécifique de mise à 
     jour de l'animation, avant le prochain rafraîchissement à l'écran 
     du navigateur. 
     Cette méthode prend comme argument une fonction de rappel qui sera 
     appelée avant le rafraîchissement du navigateur.  */
    c.fillStyle="white";
    c.fillRect(0,0,canvas.width,canvas.height) 
   // c.drawImage(fond,0,0,canvas.width,canvas.height);
    player.draw()
    player.update();
    enemies.forEach(enemie => {
        enemie.draw(); 
    })
    platforms.forEach(platform=>{
        platform.draw()
    })
   
    enemies.forEach(enemie => {
        enemie.updateEnemy();
    })
    
    enemies.forEach(enemie => {
        if(collisionPlatform(enemie,player)==true)

    enemies.forEach(enemie => {
        enemie.updateEnemy();
    })
    if(keys.ArrowRight.pressed && player.position.x%11==0)
            {
                totalPoints += 1; 
            }
    if(keys.ArrowLeft.pressed && player.position.x>100)
    {
        player.velocity.x=-3; 
    }
    else if(keys.ArrowRight.pressed && player.position.x<800)
        {
            player.velocity.x=3;
            
        }
    
    else 
    {
        if(keys.ArrowRight.pressed)
        {
            platforms.forEach(platform=>{
                platform.position.x -=4;
            })
        
            
        }
        else if(keys.ArrowLeft.pressed)
        {
            platforms.forEach(platform=>{
                platform.position.x +=4;
            })
            
        }
    }

    //collision with platform
    platforms.forEach((platform) =>  {
        if(collisionPlatform(platform,player))
        {
            player.velocity.y=0; 
        }

    
})

    
}


animate() //appelle de la fonction animate()


window.addEventListener("keydown", (event) => {  //attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= true;
            player.velocity.x=-3;
        break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= true
            player.velocity.x=3;
        break; 
        case " " : 
            if(player.velocity.y == 0)
            {
                keys.Space.pressed=true;
                player.velocity.y=-20;
            }
            else
            {
                player.velocity.y= player.velocity.y+gravity;
            }
        break; 
    }
})

window.addEventListener("keyup", (event) => {

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= false;
        break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= false;
        break; 
        case " " : 
            keys.Space.pressed=false; 
        break;
    }
})

