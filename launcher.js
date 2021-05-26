class launcher{
    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 30.
        }
      
        this.body = Constraint.create(options)
        World.add(world, this.body);
        this.pointB = pointB;

    }
       display(){

          if (this.body.bodyA ) {
               line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y);
          }
       }

      fly(){
          this.body.bodyA = null
      } 
}