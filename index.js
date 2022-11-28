
const canvas=document.querySelector("canvas");
const c=canvas.getContext("2d")
canvas.width=1800; 
canvas.height=940; 

const gravity=0.25; 
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

    update()
    {
        this.draw();
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
        x : 0,
        y:0,
    }
)
const player2=new Player(
    {
        x : 100,
        y : 200,
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
}
function animate()
{

    window.requestAnimationFrame(animate);
    c.fillStyle="white"
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw();
    player.update();
    player2.draw(); 
    player2.update();
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
        player.velocity.y=-15;
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
    }
})