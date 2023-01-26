function collisionEnemy(player,enemy)
{
    if(player.position.y + player.height <=enemy.position.y && 
        player.position.y + player.height + player.velocity.y >= enemy.position.y && 
        player.position.x + player.width  >= enemy.position.x && 
        player.position.x  <= platform.width + enemy.position.x )
    {
        return true;
    }
    else return false; 
}

function collisionPlatform(platform, player)
{
    if(player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y && 
        player.position.x + player.width  >= platform.position.x +55 && 
        player.position.x  <= platform.width + platform.position.x -190)
        {
        return true;   
        }
} 