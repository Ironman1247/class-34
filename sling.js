class Sling{

    constructor(bodyA,pointB){

        var options={

            bodyA : bodyA,
            pointB: pointB,
            stiffness : 0.04,
            length : 20,
        }
       this.pointB = pointB
        this.sling=Matter.Constraint.create(options);

       

        World.add(world,this.sling)
    }
     fly(){
     
        this.sling.bodyA = null;
     }
     attach(body){
      this.sling.bodyA = body
     }

     
    display(){
        
        if(this.sling.bodyA){

        
        var pA = this.sling.bodyA.position
        var pB=  this.pointB
       push();
        stroke(70,35,15)
        strokeWeight(4)
        fill("black")
        line(pB.x,pB.y,pA.x,pA.y)
         
        pop();
        }
         
    }

}