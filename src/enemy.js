
var image=document.getElementById("image"); 
class Enemy {
    constructor(position)
    {
        this.position=position; 
        this.velocity = {
            x : 0, 
            y : 1, 
        }
        this.height=100;
    }
    draw()
    {
       var date= Date.now(); 
        while(Date.now() - date <70)
        {

        }
       i++
        c.drawImage(image,i*45+i*75,0,75,54,this.position.x,this.position.y,200,200);
       if(i==4)
       {
        i=0;
       }
    }
}

const enemy = new Enemy(
    {
        x : 750, 
        y : 736,
    }
)


function animateEnemy()
{
    window.requestAnimationFrame(animate); 
    c.fillStyle='white'; 
    c.fillRect(0,0,canvas.width,canvas.height); 
    enemy.draw; 
}
