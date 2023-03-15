const canvas=document.querySelector("canvas"); //Selectionne la balise canvas 
const c=canvas.getContext("2d"); // retourne un contexte de dessin sur le canevas
canvas.width=1890; //Dimension du canvas
canvas.height=935; //Dimension du canvas

const gravity=0.5; //Decription de la gravité du jeu
var jump = 0; 
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

const enemies = [new Enemy({x:900,y:820}), new Enemy({x:1320,y:400})]
//alea()
var compteur=0;
function animate() //animation loop
{   
    requestAnimation = window.requestAnimationFrame(animate);
    /*
     indique au navigateur qu'on souhaite exécuter une animation 
     et demande que celui-ci exécute une fonction spécifique de mise à 
     jour de l'animation, avant le prochain rafraîchissement à l'écran 
     du navigateur. 
     Cette méthode prend comme argument une fonction de rappel qui sera 
     appelée avant le rafraîchissement du navigateur.  */
    c.fillStyle="white";
    c.fillRect(0,0,canvas.width,canvas.height);
    if(player.totalPoints<250){  

     gameObjects2.forEach(Object2 =>
        {
            Object2.draw();
            Object2.update();
        
        });

}else if(player.totalPoints<500){
    gameObjects.forEach(Object =>
        {
            Object.draw();
            Object.update();
        
        });

}else if (player.totalPoints<600){

    gameObjects3.forEach(Object3 =>
        {
            Object3.draw();
            Object3.update();
        
        });
}else if (player.totalPoints>600){

    gameObjects4.forEach(Object4 =>
        {
            Object4.draw();
            Object4.update();
        
        });
}
    vie1.draw();
    player.update();
    player.draw();
    enemies.forEach(enemie => {
        enemie.draw(); 
        enemie.updateEnemy();
        enemie.dead();
    }) 
    platforms.forEach(platform=>{
        platform.draw()
        platform.update()
    })
  
        flyArray.forEach(FlyB =>
            {
                FlyB.draw();
                FlyB.update();
                FlyB.dead();
                
            });
            gameFrame++;
            flyArray.forEach(FlyB =>
                {
                    collisionBetweenEnemyAndPlayer(FlyB,player);
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
    else if(keys.ArrowRight.pressed && player.position.x>850)
        {
            player.velocity.x =0; 
            platforms.forEach(platform=>{
                platform.position.x -=2;
        })
    }
    //collision platforms/player
    platforms.forEach((platform) =>  {
        if(collisionPlatform(platform,player) && collisionPlatform(platforms[2],player)==false)
        {
            player.velocity.y=0; 
        }  
})    
//collision platforms/enemies
platforms.forEach((platform) =>  {
    enemies.forEach(enemie=>
        {
            if(collisionPlatform(platform,enemie))
            {
                enemie.velocity.y=0
            }
        })  

})
if(collisionPlatform(platforms[2],player)==true)
{
    player.velocity.y = -dep;
}


enemies.forEach(enemie => 
    {
     if(collisionBetweenEnemyAndPlayer(enemie,player))
     {
        collisionEnemie=true; 
     }
    })
    montePlatform();
    if(collisionEnemie==true)
    {
        finJeu=document.getElementById("gameOver");
        finJeu.style.visibility="visible"; 
        finJeu.style.opacity="1";
        window.cancelAnimationFrame(requestAnimation);
    }
}
animate()
 //appelle de la fonction animate()

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
            if(player.position.x > 850)
            {
                player.velocity.x =0.1;
            
            }
            else player.velocity.x =3;
            gamespeed = 0.4;

            break; 
        case " " : 
            if(jump==0 && (player.velocity.y==0 || player.velocity.y==-dep ))
            {
                keys.Space.pressed=true;
                jump = 1; 
                player.velocity.y =-20;
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
            jump = 0; 
            keys.Space.pressed=false;
    }
})



