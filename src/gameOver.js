function collisionBetweenEnemyAndPlayer(enemie,player)
{
    if( player.position.x >= enemie.position.x-92 
        && player.position.x <=enemie.position.x+92)
        {
        if(player.position.y <= enemie.position.y+1.5+enemie.height)  
        {
            
            return true;
        }
}
   else return false; 

}

function gameOver(player,enemie)
{
    if(collisionBetweenEnemyAndPlayer(enemie,player)==true)
    {
        c.fillText("GAME OVER",450,450); 
        vie1.updatelife();
    }
}