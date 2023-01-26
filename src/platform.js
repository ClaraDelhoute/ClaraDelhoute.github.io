var imagePlatform=document.getElementById("platform");

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

