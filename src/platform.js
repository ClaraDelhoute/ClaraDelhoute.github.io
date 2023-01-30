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

function ajoute(maxX,minX,maxH,minH)
{
    xPlatform=Math.floor(Math.random()*(maxX-minY+1)+minX);
    yPlatform=Math.floor(Math.random()*(maxH-minH+1)+minH);
    const platform= new Plateform({x:xPlatform,y:yPlatform});
    platforms.push(platform);
}

const platforms = [
    new Plateform({x:256,y: 750})
    ,new Plateform({x:498,y:520}),
    new Plateform({x:898, y:656})
    ,new Plateform({x:1300,y:500})
    ,new Plateform({x:2100,y:750}),
    new Plateform({x:2400,y:590})];
 
    


