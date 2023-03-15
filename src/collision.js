var collisionEnemie = false; 

function collisionEnemyOnTop(player,enemy)
{
    if(player.position.y + player.height <=enemy.position.y && 
        player.position.y + player.height + player.velocity.y >= enemy.position.y && 
        player.position.x + player.width >= enemy.position.x +50 && 
        player.position.x  <= platform.width + enemy.position.x-300)
    {
        return true;
    }
} //cette fonction permet au joueur d'éliminer un ennemie
function collisionBetweenEnemyAndPlayer(enemie,player)
{
    if( player.position.x >= enemie.position.x-enemie.width/2
        && player.position.x <=enemie.position.x+enemie.width/2)
        {
        if(player.position.y <= enemie.position.y+1.5+enemie.height/2
            && player.position.y+player.height >=enemie.position.y)  
        {
            return true; 
        }
}
   else return false; 

} //fonction qui détecte la collission entre un ennemmie et joueur pour effectuer la fonction de gameOver
function collisionPlatform(platform, player)
{
    if(player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height +player.velocity.y+0.5 >= platform.position.y&& 
        player.position.x + player.width  >= platform.position.x + 60 && 
        player.position.x  <= platform.width/2 + platform.position.x - 3 
        )
        {
        return true;  
       
        }
    else return false;
}//fonction collision entre plateformes et joueur pour permettre à un joueur de marcher sur une plateforme. 


