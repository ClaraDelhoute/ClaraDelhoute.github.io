const canvas=document.querySelector("canvas"); //Selectionne la balise canvas 
const c=canvas.getContext("2d"); // retourne un contexte de dessin sur le canevas
canvas.width=1890; //Dimension du canvas
canvas.height=930; //Dimension du canvas

const gravity=0.6; //Decription de la gravité du jeu

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

const player = new Player(
    {
        x : 1,
        y: 0,
        
    },
)


const enemies = [new Enemy({x:900,y:825}), new Enemy({x:1320,y:400})]
//alea()
var compteur=0;
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
    c.fillStyle="white";
    c.fillRect(0,0,canvas.width,canvas.height);
    gameObjects.forEach(Object =>
        {
            Object.draw();
            Object.update();
        
        });
    player.update();
    player.draw();
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
        enemie.dead();
    })
        flyArray.forEach(FlyB =>
            {
                FlyB.draw();
                FlyB.update();
                
            });
            gameFrame++;
    
            flyArray.forEach(FlyB =>
                {
                    gameOver(player,FlyB)
                    
                });     
    if(keys.ArrowRight.pressed)
            {
                compteur++;
                if(compteur==30)
                {
                    player.totalPoints ++;
                    compteur=0;
                }
            }
    if(keys.ArrowLeft.pressed)
    {
        player.velocity.x = -3; 
    }
    else if(keys.ArrowRight.pressed && player.position.x>700)
        {
            player.velocity.x=0;
            platforms.forEach(platform=>{
                platform.position.x -=4.5;
        })
    }
    /*platforms.forEach(platform =>
        {
            if(platform.position.x <0)
            {
                let indexPlatform=platforms.indexOf(platform)
                platforms.delete(platform)
                ajoute(7000,platforms[indexPlatform],500,120);
            }; 
            
        })*/
       
    /*else 
    {
        if(keys.ArrowRight.pressed && player.position.x >950)
        {
            platforms.forEach(platform=>{
                platform.position.x -=3;
                player.velocity.x= 2
            }

            )  
        }  */
    //collision with platform
    platforms.forEach((platform) =>  {
        if(collisionPlatform(platform,player))
        {
            player.velocity.y=0; 
        }  
        if(collisionPlatformOnBottom(platform,player))
        {
            player.position.y = platform.position.y +gravity;
        }
})    
platforms.forEach((platform) =>  {
    enemies.forEach(enemie=>
        {
            if(collisionPlatform(platform,enemie))
            {
                enemie.velocity.y=0;
            }
        })  

})
enemies.forEach(enemie => 
    {
        
        gameOver(enemie,player);
    })
}


animate() //appelle de la fonction animate()

window.addEventListener("keydown", (event) => {  //attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

    switch(event.key)
    {
        case "ArrowLeft" :
            keys.ArrowLeft.pressed= true;
            if(player.position.x<200)
            {
            player.velocity.x =3;
            
            }
            gamespeed = 0;
            break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= true;
            if(player.position.x > 700)
            {
                player.velocity.x =0
            
            }
            else player.velocity.x =3;
            gamespeed = 0.5;

            break; 
        case " " : 
            if(player.velocity.y == 0)
            {
                keys.Space.pressed=true;
                player.velocity.y=-20.4;
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
            player.velocity.x=0;
            gamespeed = 0;
        break; 
        case "ArrowRight" : 
            keys.ArrowRight.pressed= false;
            player.velocity.x=0;
            gamespeed = 0;
        break; 
        case " " : 
            keys.Space.pressed=false;
    }
})

