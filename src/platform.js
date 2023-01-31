var imagePlatform=document.getElementById("platform");

class Plateform {
    constructor({x,y}) 
    {
        this.position=
        {
        x,
        y,
        }
        this.width=370+Math.floor(Math.random()*(200-26)+26);
        this.height=60;
    }
    update()
    {
        this.repop()
    }
    draw()
    {
        
        c.drawImage(imagePlatform,this.position.x,this.position.y,this.width,this.height);
    }
    repop()
    {   if(this.position.x<-150)
        this.position.x=player.position.x+2100;
    } 
} 

var deplace=1;
dep=-1
function montePlatform()
{   
                platforms[2].position.y -=dep;
                if(platforms[2].position.y==200)
                {
                    dep=-1;
                   
                }
                if(platforms[2].position.y==760)
                {
                     dep=1;
                }
                
 }

   

 



var platforms = [
    new Plateform({x:256,y: 750})
    ,new Plateform({x:498,y:520}),
    new Plateform({x:898, y:656}),
    ,new Plateform({x:1300,y:500})
    ,new Plateform({x:2100,y:750}),
    new Plateform({x:2400,y:590})];
 
    


