const canvas=document.querySelector("canvas"); //Selectionne la balise canvas 
const c=canvas.getContext("2d"); // retourne un contexte de dessin sur le canevas
canvas.width=1850; //Dimension du canvas
canvas.height=940; //Dimension du canvas
//var img2=document.getElementById("img2");
const gravity=0.6; //Decription de la gravité du jeu
//Création de la classe joueur
const player = new Player(
    {
        x : 1,
        y: 0,
        
    },
)

const keys = //définition des clés du clavier
{
    ArrowRight:
    {
        pressed : false
    },
    ArrowLeft: {
        pressed: false
    },
    Space : 
    {
        pressed : false
    },
}
const fond = new Fond()
const platforms = [new Plateform({x:256,y: 750}),new Plateform({x:498,y:520}),new Plateform({x:898,y:656})]

const enemies = [new Enemy({x:754,y:825}) /*, new Enemy({x:658,y:518})*/]

function animate() //animation loop
{   
    window.requestAnimationFrame(animate);
    /*
     indique au navigateur qu'on souhaite exécuter une animation 
     et demande que celui-ci exécute une fonction spécifique de mise à 
     jour de l'animation, avant le prochain rafraîchissement à l'écran 
     du navigateur. 
     Cette méthode prend comme argument une fonction de rappel qui sera 
     appelée avant le rafraîchissement du navigateur.  */
    /*c.fillStyle="white";
    c.fillRect(0,0,canvas.width,canvas.height) */
    fond.draw(canvas.width,canvas.height);
    fond.update();
    player.draw();
    player.update();
    enemies.forEach(enemie => {
        enemie.draw(); 
    })
    platforms.forEach(platform=>{
        platform.draw()
    })
   
    enemies.forEach(enemie => {
        enemie.updateEnemy();
    })
    enemies.forEach(enemie => {
        if(collisionPlatform(enemie,player)==true)
        {
            enemie.dead(); 
        }
    })
    enemies.forEach(enemie => {
        enemie.updateEnemy();
    })
    if(keys.ArrowRight.pressed && player.position.x%11==0)
            {
                player.totalPoints += 1; 
            }
    if(keys.ArrowLeft.pressed && player.position.x>100)
    {
        player.velocity.x = -3; 
    }
    else if(keys.ArrowRight.pressed && player.position.x<800)
        {
            player.velocity.x = 3;
            
        }
    else 
    {
        if(keys.ArrowRight.pressed)
        {
            platforms.forEach(platform=>{
                platform.position.x -=4;
                fond.velocity.x = -4;
            })  
        }
        else if(keys.ArrowLeft.pressed)
        {
            platforms.forEach(platform=>{
                platform.position.x +=4;
            })  
        }
    }
    //collision with platform
    platforms.forEach((platform) =>  {
        if(collisionPlatform(platform,player))
        {
            player.velocity.y=0; 
        }  
})    
}
animate() //appelle de la fonction animate()

window.addEventListener("keydown", (event) => {  //attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= true;
            player.velocity.x =-3;
        break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= true
            player.velocity.x =3;
        break; 
        case " " : 
            if(player.velocity.y == 0)
            {
                keys.Space.pressed=true;
                player.velocity.y=-20;
            }
            else
            {
                player.velocity.y= player.velocity.y+gravity;
            }
        break; 
    }
})

window.addEventListener("keyup", (event) => {

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= false;
            player.velocity.x = 0;
        break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= false;
            player.velocity.x = false; 
        break; 
        case " " : 
            keys.Space.pressed=false;
    }
})

