class Log {
    constructor(x, y,height) {
      
      this.body = Bodies.rectangle(x, y, height, 20);
      
   
      World.add(world, this.body);
      this.height = height;
      this.logimage=loadImage("image/wood2.png")
    }
    display(){
  
       fill  ("yellow")  
      image(this.logimage,this.body.position.x,this.body.position.y,this.height,20)
        
  };
}