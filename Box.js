class Box{
constructor(m,a){
   var order1 ={
       restitution:0.5,
    friction:3
    }
    this.box=Bodies.rectangle(m,a,100,100,order1);
    World.add(world,this.box);
    this.boximage=loadImage("image/wood1.png")
}




display(){
                   imageMode(CENTER)
                   fill  ("blue")  
                   image(this.boximage,this.box.position.x,this.box.position.y,100,100);
}





}
