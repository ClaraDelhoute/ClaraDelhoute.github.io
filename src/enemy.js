class Enemy {
    constructor({x,y})
    {
        this.position = {
            x,
            y,
        }
        this.velocity = 
        {
            x:-0.5,
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
    {  
       // this.position.x+=this.velocity.x
        this.updateHitBox();
        this.dead();
        this.position.x += this.velocity.x;
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
    dead()
    {
        enemies.forEach(enemie =>
            {
                
            
            if(collisionEnemy(player,enemie))
            {
                
                this.position.x=-1250;
                this.position.y=-950;
                player.velocity.y +=gravity
                player.totalPoints += 10;
            
        }
        })
    }
}
