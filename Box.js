class Box  {
  constructor(x, y){
    var options = {
      density : 0.05 ,
      friction :1,
      restitution: 0.8
    }
    this.body=Bodies.rectangle(x,y,50,50,options)
    this.width =50
    this.height = 50
   World.add  (world,this.body)
  }
 display(){
   var pos = this.body.position
   push();
   translate(pos.x,pos.y)
   rotate(this.body.angle)
   rectMode(CENTER)
   rect(0,0,50,50)
   pop();
 }
};
