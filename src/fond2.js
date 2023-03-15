
const backgroundlayer2_1 = new Image();
backgroundlayer2_1.src ="photo/Layers2/BG.png";

const backgroundlayer2_2 = new Image();
backgroundlayer2_2.src ="photo/Layers2/Foreground.png";

const backgroundlayer2_3 = new Image();
backgroundlayer2_3.src ="photo/Layers2/Ground_01.png";

const backgroundlayer2_4 = new Image();
backgroundlayer2_4.src ="photo/Layers2/Ground_02.png";

const backgroundlayer2_5 = new Image();
backgroundlayer2_5.src ="photo/Layers2/Middle.png";

const backgroundlayer2_6 = new Image();
backgroundlayer2_6.src ="photo/Layers2/Sky.png";

const backgroundlayer2_7 = new Image();
backgroundlayer2_7.src ="photo/Layers2/Snow.png";

class LEVEL2{
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

const Layer2_1 = new LEVEL2(backgroundlayer2_6, 5);
const Layer2_2 = new LEVEL2(backgroundlayer2_7, 5);
const Layer2_3 = new LEVEL2(backgroundlayer2_1, 3);
const Layer2_4 = new LEVEL2(backgroundlayer2_5, 2);
const Layer2_5 = new LEVEL2(backgroundlayer2_2, 0.1);
const Layer2_6 = new LEVEL2(backgroundlayer2_4, 0.1);
const Layer2_7 = new LEVEL2(backgroundlayer2_3, 0.1);



const gameObjects2 = [Layer2_1, Layer2_2, Layer2_3, Layer2_4, Layer2_5, Layer2_6, Layer2_7];