let gamespeed = 0;
const backgroundlayer1 = new Image();
backgroundlayer1.src ="photo/Layers/BG.png";

const backgroundlayer2 = new Image();
backgroundlayer2.src ="photo/Layers/Foreground.png";

const backgroundlayer3 = new Image();
backgroundlayer3.src ="photo/Layers/Ground_01.png";

const backgroundlayer4 = new Image();
backgroundlayer4.src ="photo/Layers/Ground_02.png";

const backgroundlayer5 = new Image();
backgroundlayer1.src ="photo/Layers/Middle.png";

const backgroundlayer6 = new Image();
backgroundlayer6.src ="photo/Layers/Sky.png";

const backgroundlayer7 = new Image();
backgroundlayer7.src ="photo/Layers/Snow.png";

class Layer{
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

const Layer1 = new Layer(backgroundlayer6, 5);
const Layer2 = new Layer(backgroundlayer7, 5);
const Layer3 = new Layer(backgroundlayer1, 3);
const Layer4 = new Layer(backgroundlayer2, 2);
const Layer5 = new Layer(backgroundlayer5, 0.1);
const Layer6 = new Layer(backgroundlayer4, 0.1);
const Layer7 = new Layer(backgroundlayer3, 0.1);



const gameObjects = [Layer1, Layer2, Layer3, Layer4, Layer5, Layer6, Layer7];