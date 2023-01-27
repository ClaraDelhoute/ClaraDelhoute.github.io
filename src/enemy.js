var enemieKill = 0;
function alea(max,min)
{
    return   Math.floor(Math.random() * (max - min + 1)) + min;
}
class Enemy {
    constructor({x,y})
    {
        this.position = {
            x,
            y,
        }
        this.velocity = 
        {
            x:-1,
            y:0,
        }
        this.height=100;
        this.width=100; 
        this.hitbox= {
            position : 
            {
                x: this.position.x, 
                y: this.position.y,
            },
            height:10, 
            width:10
        }
        
    }
  
    draw()
    {
        c.fillStyle="red"; 
        c.fillRect(this.position.x, this.position.y,this.width,this.height-5);
    }
    updateEnemy()
    {   this.updateHitBox();
        this.repop();
        this.position.x+=this.velocity.x
        this.position.y += this.velocity.y;
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
