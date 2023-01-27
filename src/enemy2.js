

const bat = new Image();
bat.src ="photo/bluebat.png";
const flyArray = [];
const numerOfEnemies = 5;
let gameFrame = 0;



class FlyB{

constructor(){


    this.position= {
    x : (Math.floor(Math.random() * canvas.width)+Math.floor(Math.random() * canvas.width)),
    y : (Math.random() * canvas.height),
    }
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 473;
    this.spriteHeight = 468;
    this.width = this.spriteWidth /4.5;
    this.height = this.spriteHeight /4.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
}



update(){
this.position.x += this.speed;
this.position.y += this.speed;

if(gameFrame % this.flapSpeed ===0 ){
    this.frame > 4 ? this.frame = 0: this.frame++;
}

}





draw()
{
    
   /* c.strokeRect(this.x, this.y,this.width,this.height);*/
    c.drawImage(bat, this.frame * this.spriteWidth, 0, this.spriteWidth , this.spriteHeight  , this.position.x, this.position.y, this.width, this.height);
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

