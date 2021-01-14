class Chain{

    constructor(p,q){
     var options={
        bodyA:p,
        pointB:q,
        lenght:10
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);
this.sling1=loadImage("image/sling1.png")
this.sling2=loadImage("image/sling2.png")
}
display(){

if(this.chain.bodyA){
  line (this.chain.bodyA.position.x-32,this.chain.bodyA.position.y,this.chain.pointB.x-19,this.chain.pointB.y)
  line (this.chain.bodyA.position.x+52,this.chain.bodyA.position.y,this.chain.pointB.x+30,this.chain.pointB.y)
  image (this.sling1,230,210)
image (this.sling2,200,165)

}
}
disconnectBird(){
   this.chain.bodyA=null
}
connectBird(s){
   this.chain.bodyA=s
}


}