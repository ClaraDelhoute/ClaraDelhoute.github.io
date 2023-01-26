var fondJeu=document.getElementById("fond");
class Fond{
    constructor()
   {
        this.position = 
        {
            x : 0,
            y : 0,
        },

        this.velocity = 
        {
            x  : 0,
            y : 0,
        }
        
    }
    
    
    draw(width,height)
    {
        c.drawImage(fondJeu,0,0,width,height);
    }   
    update()
    {
        this.position.x += this.velocity.x; 
    }
}
