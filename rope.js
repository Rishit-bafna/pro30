class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: hexagon1.body,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.rope0 = Constraint.create(options);
        World.add(world, this.rope0);
    }
    fly(){
        this.rope0.bodyA = null;
    }
    attach(){
        this.rope0.bodyA = hexagon1.body;
    }
   
    display(){
        if(this.rope0.bodyA){
        var pointA = this.rope0.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }    
    }
    
     
}
