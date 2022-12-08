
const canvas=document.querySelector("canvas"); //Selectionne la balise canvas 
const c=canvas.getContext("2d")
canvas.width=1800; //Dimension du canvas
canvas.height=940; //Dimension du canvas


const gravity=0.4; //Decription de la gravité du jeu

var totalPoints=0 //variable de points 
//Création de la classe joueur
class Player {

    constructor(position) 
    {
        this.position = position;   
        this.velocity = {
            x : 0, 
            y : 1,
        }
    this.height=100;    
    }
    draw()
    {
        c.fillStyle="red"; 
        c.fillRect(this.position.x,this.position.y,100,this.height);

    }
    score()
    {
        
        c.fillStyle="blue";
        c.font="45px moon";
        c.fillText(totalPoints,1500,50); 
    }
    
    update()
    {
        this.draw();
        this.score();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if(this.position.y + this.height + this.velocity.y < canvas.height)
        {
            this.velocity.y += gravity; 
        }
        else this.velocity.y=0
       this.totalPoints += 1;
    }
}

const player = new Player(
    {
        x : 1,
        y: 0,
    }
)

const keys =
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
    c.fillStyle="white"
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw();
    player.update();
    player.velocity.x=0;
    if(keys.ArrowLeft.pressed)
    {
        player.velocity.x=-1.5; 
    }
    else 
    {
        if(keys.ArrowRight.pressed)
        {
            player.velocity.x=1.5;
            if(player.position.x%13==0)
    {
        totalPoints++;
    }
        }
    }
    
}

animate()


window.addEventListener("keydown", (event) => {

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= true;
            player.velocity.x=-1.5;
        break; 
        case "ArrowRight" : 
        keys.ArrowRight.pressed= true
        player.velocity.x=1.5;
        break; 
        case " " : 
        if(player.velocity.y == 0)
        {
        keys.Space.pressed=true;
        player.velocity.y=-20;
        
        }
        else
        {player.velocity.y= y+gravity;
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