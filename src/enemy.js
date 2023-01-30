const monster = new Image();
monster.src ="photo/monster2.1.png";

var enemieKill = 0;


function alea(max,min)
{
    return   Math.floor(Math.random() * (max - min + 1)) + min;
}
class Enemy {
    constructor({x,y})
    {
        this.spriteWidth = 303.52;
    this.spriteHeight = 198;
    this.frame = 0;
    
        this.position = {
            x,
            y,
        }
        this.velocity = 
        {
            x:-1,
            y:0,
        }
        this.height=this.spriteHeight/2;
        this.width=  this.spriteWidth /2; 
        
        this.hitbox= {
            position : 
            {
                x: this.position.x, 
                y: this.position.y,
            },
          width : 10,
          height : 10,
        }
        
    }
  
    draw()
    {
        
       c.drawImage(monster,this.frame * this.spriteWidth, 0, this.spriteWidth , this.spriteHeight  , this.position.x, this.position.y, this.width, this.height);
            
    }
            
    updateEnemy()
    
    { 
       
        this.repop();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        this.frame >=20 ? this.frame = 0 : this.frame++;
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
    repop()
    {
        if(this.position.x <0)
        {
            this.position.x=player.position.x+Math.floor(Math.random()*(2500-1500+1)+1500)
        }
    }
    dead()
    {       enemies.forEach(enemie=>
        {
            if(collisionEnemyOnTop(player,enemie))
            {
                console.log(enemies.indexOf(enemie));
                var index=enemies.indexOf(enemie)
                enemies[index].position.x +=1500;
                enemies[index].velocity.x -= 1;
                enemies[index].position.y = enemies[index].position.y;
                player.velocity.y += gravity
                player.totalPoints += 10;
                enemieKill += 1; 
              
        } 
        
    })
}
    acceleration()
    {
        if(player.totalPoints%101==true)
        {
            enemies.forEach(enemie =>
                {
                    enemie.velocity.x += 1;
                })
        }
    }


}
function alea()
{
    let i; 
    for(i=0;i<10;i++)
    {
        positionOfX= Math.floor((Math.random()*1000-500+1)+500);
        otherEnemy=new Enemy({x: positionOfX, y : 930});
        enemies.push(otherEnemy);
    }
    console.log(enemies);
}
