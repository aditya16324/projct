class Bird {
    constructor(m, a,n,i) {
     
      this.body= Bodies.rectangle(m, a, n, i);
    
      World.add(world, this.body);
      this.width = n;
      this.height = i;
      this.birdimage=loadImage("image/bird.png")
      this.smokeimage=loadImage("image/smoke.png")
      this.aditya =[];
    }
    display(){
     // this.body.position.x=mouseX
     // this.body.position.y=mouseY
     if(this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y]; 
      this.aditya.push(position);
     }
    
     rectMode(CENTER)
      fill  ("red")  
     image(this.birdimage,this.body.position.x,this.body.position.y,this.width,this.height)
    
     for(var i=0; i<this.aditya.length; i++){ 
       image(this.smokeimage, this.aditya[i][0], this.aditya[i][1]); 
      }
      
    }
    
  }
  