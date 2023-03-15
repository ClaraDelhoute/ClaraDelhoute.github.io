
const backgroundlayer3_1 = new Image();
backgroundlayer3_1.src ="photo/Layers3/BG.png";

const backgroundlayer3_2 = new Image();
backgroundlayer3_2.src ="photo/Layers3/Foreground.png";

const backgroundlayer3_3 = new Image();
backgroundlayer3_3.src ="photo/Layers3/Ground_01.png";

const backgroundlayer3_4 = new Image();
backgroundlayer3_4.src ="photo/Layers3/Ground_02.png";

const backgroundlayer3_5 = new Image();
backgroundlayer3_5.src ="photo/Layers3/Middle.png";

const backgroundlayer3_6 = new Image();
backgroundlayer3_6.src ="photo/Layers3/Sky.png";

const backgroundlayer3_7 = new Image();
backgroundlayer3_7.src ="photo/Layers3/Snow.png";

class LEVEL3{
    constructor(Image,speedModifier){
      this.x = 0;
      this.y = 0;
      this.width = 1919;
      this.height = 940;
      this.x2 = this.width;
      this.Image = Image;
      this.speedModifier = speedModifier;
      this.speed = gamespeed * this.speedModifier;
}

update(){
this.speed = gamespeed * this.speedModifier;
if(this.x <= -this.width){
   this.x = this.width + this.x2 - this.speed;
}
if(this.x2 <= -this.width){
   this.x2 = this.width + this.x - this.speed;
}
this.x = Math.floor(this.x - this.speed);
this.x2 = Math.floor(this.x2 - this.speed);
}
draw(){
c.drawImage(this.Image, this.x, this.y, this.width, this.height);
c.drawImage(this.Image, this.x2, this.y, this.width, this.height);
  }
}

const Layer3_1 = new LEVEL3(backgroundlayer3_6, 5);
const Layer3_2 = new LEVEL3(backgroundlayer3_7, 5);
const Layer3_3 = new LEVEL3(backgroundlayer3_1, 3);
const Layer3_4 = new LEVEL3(backgroundlayer3_5, 2);
const Layer3_5 = new LEVEL3(backgroundlayer3_2, 0.1);
const Layer3_6 = new LEVEL3(backgroundlayer3_4, 0.1);
const Layer3_7 = new LEVEL3(backgroundlayer3_3, 0.1);



const gameObjects3 = [Layer3_1, Layer3_2, Layer3_3, Layer3_4, Layer3_5, Layer3_6, Layer3_7];