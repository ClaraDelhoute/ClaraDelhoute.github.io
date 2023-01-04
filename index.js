
const canvas=document.querySelector("canvas"); //Selectionne la balise canvas 
const c=canvas.getContext("2d"); // retourne un contexte de dessin sur le canevas
canvas.width=1800; //Dimension du canvas
canvas.height=940; //Dimension du canvas


const scale=0.8;
const width=138;
const height=138;
const scaleWidth=scale * width; 
const scaleHeight= scale * height; 
const cycleLoop=[0,1,2,3,4,5,6,7,8];
let currentLoopIndex=0;
var direction = 0; 
var img = document.getElementById("img"); 
const gravity=0.4; //Decription de la gravité du jeu
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
    }
    draw()
    {
        var date = Date.now();
        while (Date.now() - date <25) {

        }
        if (keys.ArrowLeft.pressed) {
          /* c.scale(-1,1); 
           c.drawImage(img,-currentLoopIndex*95+currentLoopIndex*33,0,130,height,this.position.x,this.position.y,scaleWidth,-scaleWidth);
           currentLoopIndex++;
           if(currentLoopIndex>= cycleLoop.length)
           {
                   currentLoopIndex = 0; 
           }
        */
        
        }
        else if (keys.ArrowRight.pressed) {
           /* c.drawImage(img,currentLoopIndex*95+currentLoopIndex*33,0,130,height,this.position.x,this.position.y,scaleWidth,scaleWidth);
        currentLoopIndex++;
        if(currentLoopIndex>= cycleLoop.length)
        {
                currentLoopIndex = 0; 
        }*/
        }
        else {
            currentLoopIndex =0;
    
        }
       c.drawImage(img,currentLoopIndex*95+currentLoopIndex*33,0,130,height,this.position.x,this.position.y,scaleWidth,scaleHeight);
        currentLoopIndex++;
        if(currentLoopIndex>= cycleLoop.length)
        {
                currentLoopIndex = 0; 
        }
    }

    score() //fonction permettant de définir le score
    {
        
        c.fillStyle="blue";
        c.font="45px moon";
        c.fillText(totalPoints,1600,50); 
    }
    
    update()
    {
        this.score(); //appelle la fonction score()
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.y + this.height + this.velocity.y < canvas.height)
        {
            this.velocity.y += gravity; 
        }
        else this.velocity.y=0
    }
}

const player = new Player(
    {
        x : 1.5,
        y: 0,
        
    },
)

if(player.position.x <0)
    {
        player.position.x=0;
    }
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

function animate()
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
    c.fillStyle="blue"
    c.fillRect(650,670,200,30);
    player.draw()
    player.update();
    player.velocity.x=0;
    if(keys.ArrowLeft.pressed && player.position.x >0 )
    {
        player.velocity.x=-3.5; 
    }
    else 
    {
        if(keys.ArrowRight.pressed)
        {
            player.velocity.x=3.5;
            if(player.position.x%13==0)
            {
                totalPoints += 1; 
            }
        }
    } 
}
while(player.position.y + player.height + player.velocity.y < canvas.height)
        {
            player.velocity.y += gravity; 
        
    c.drawImage(img,currentLoopIndex,0,130,height,player.position.x,player.position.y,scaleWidth,scaleWidth);
}
animate() //appelle de la fonction animate()


window.addEventListener("keydown", (event) => {  //attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= true;
            player.velocity.x=-3.5;
        break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= true
            player.velocity.x=3.5;
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

