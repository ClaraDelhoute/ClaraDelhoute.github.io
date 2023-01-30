const vie = new Image();
vie.src ="photo/vie.png";


class Vie{

    constructor(){

        this.position = {
            x:0,
            y:1,
            }
            this.width = 100;
            this.height = 125;
            this.spriteWidth = 202;
            this.spriteHeight = 240;
            this.frame = 0;
           



    }


    draw()
    {
        
       //c.strokeRect(this.position.x, this.position.y,this.width,this.height);
        c.drawImage(vie, this.frame * this.spriteWidth, 0, this.spriteWidth , this.spriteHeight  , this.position.x, this.position.y, this.width, this.height);
    }
    
    updatelife(){
this.frame++;
    }

}

const vie1 = new Vie();