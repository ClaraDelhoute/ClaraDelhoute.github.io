
const backgroundlayer4_1 = new Image();
backgroundlayer4_1.src ="photo/Layers4/BG.png";

const backgroundlayer4_2 = new Image();
backgroundlayer4_2.src ="photo/Layers4/Foreground.png";

const backgroundlayer4_3 = new Image();
backgroundlayer4_3.src ="photo/Layers4/Ground_01.png";

const backgroundlayer4_4 = new Image();
backgroundlayer4_4.src ="photo/Layers4/Ground_02.png";

const backgroundlayer4_5 = new Image();
backgroundlayer4_5.src ="photo/Layers4/Middle.png";

const backgroundlayer4_6 = new Image();
backgroundlayer4_6.src ="photo/Layers4/Sky.png";

const backgroundlayer4_7 = new Image();
backgroundlayer4_7.src ="photo/Layers4/Snow.png";

const backgroundlayer4_8 = new Image();
backgroundlayer4_8.src ="photo/Layers4/Moon.png";

class LEVEL4{
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

const Layer4_1 = new LEVEL4(backgroundlayer4_6, 5);
const Layer4_2 = new LEVEL4(backgroundlayer4_7, 5);
const Layer4_8 = new LEVEL4(backgroundlayer4_8, 0.1);
const Layer4_3 = new LEVEL4(backgroundlayer4_1, 3);
const Layer4_4 = new LEVEL4(backgroundlayer4_5, 2);
const Layer4_5 = new LEVEL4(backgroundlayer4_2, 0.1);
const Layer4_6 = new LEVEL4(backgroundlayer4_4, 0.1);
const Layer4_7 = new LEVEL4(backgroundlayer4_3, 0.1);




const gameObjects4 = [Layer4_1, Layer4_2, Layer4_3, Layer4_4, Layer4_5, Layer4_6, Layer4_7, Layer4_8];