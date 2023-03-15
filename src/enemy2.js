

const bat = new Image();
bat.src ="photo/bluebat.png";
const flyArray = [];
const numerOfEnemies = 4;
let gameFrame = 0;



class FlyB{

constructor(){


    this.position= {
        x : Math.floor(Math.random() * (1880 - 1050+ 1)+1050) ,
        y : Math.floor(Math.random() * (800- 120+ 1)+120) ,
    }
    this.width = 100;
    this.height = 100;
    this.speed = (Math.random() * (5-3.75)+3.75);
    this.spriteWidth = 473;
    this.spriteHeight = 468;
    this.width = this.spriteWidth /4.5;
    this.height = this.spriteHeight /4.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
}



update(){
this.position.x -= this.speed;

if(gameFrame % this.flapSpeed ===0 ){
    this.frame > 4 ? this.frame = 0: this.frame++;
}
this.repop();
}


repop()
{
    if(this.position.x<-100-this.width)
    {
        this.position.x=player.position.x+Math.floor(Math.random()*(4500-1701)+1700); 
        this.position.y=Math.floor(Math.random()*(750-299)+300);
    }
}


draw()
{
    
   /* c.strokeRect(this.x, this.y,this.width,this.height);*/
    c.drawImage(bat, this.frame * this.spriteWidth, 0, this.spriteWidth , this.spriteHeight  , this.position.x, this.position.y, this.width, this.height);
}

dead()
{
    flyArray.forEach(flyB=>
        {
    if(collisionEnemyOnTop(player,flyB))
    {
        var index=flyArray.indexOf(flyB); 
        flyArray[index].position.x=player.position.x+Math.floor(Math.random()*(2900-1851)+1850);
        flyArray[index].position.y=Math.floor(Math.random()*(750-299)+300);
        player.totalPoints+=10;
        enemieKill++;
        
    }
})
}
};

for(let i = 0; i < numerOfEnemies; i++){
    flyArray.push(new FlyB());
}

function animate()
{
    
    c.clearRect(0, 0, canvas.width, canvas.height);
    flyArray.forEach(FlyB =>
        {
           
            FlyB.update();
            FlyB.draw();
          
        });
    

requestAnimationFrame(animate);

}

