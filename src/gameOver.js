function collisionBetweenEnemyAndPlayer(enemie,player)
{
    if( player.position.x >= enemie.position.x-92 
        && player.position.x <=enemie.position.x+92)
        {
        if(player.position.y <= enemie.position.y)  
        {
            
            return true;
        }
}
   else return false; 

}

function gameOver(player,enemie)
{
    if(collisionBetweenEnemyAndPlayer(enemie,player)==true || ((collisionBetweenEnemyAndPlayer)==true &&(keys.ArrowRight.pressed || keys.ArrowLeft.pressed)))
    {
        c.fillText("GAME OVER",450,450); 
    }
}