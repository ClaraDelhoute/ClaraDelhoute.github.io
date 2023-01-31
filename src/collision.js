function collisionEnemyOnTop(player,enemy)
{
    if(player.position.y + player.height <=enemy.position.y && 
        player.position.y + player.height + player.velocity.y >= enemy.position.y && 
        player.position.x + player.width >= enemy.position.x +50 && 
        player.position.x  <= platform.width + enemy.position.x-300)
    {
        return true;
    }
}

function collisionPlatformOnBottom(platform,player)
{
    if(player.position.y+player+height == platform.position.y &&
        player.position.y<canvas.height &&
        player.position.x+player.width>=platform.position.x &&
        player.position.x <= platform.position.x+platform.width )
        {
            return true; 
        }
}

function collisionPlatform(platform, player)
{
    if(player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y && 
        player.position.x + player.width  >= platform.position.x +55  && 
        player.position.x  <= platform.width + platform.position.x - platform.width/1.75
        )
        {
        return true;   
        }
} 