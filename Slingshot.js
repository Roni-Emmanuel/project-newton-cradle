class slingshot{
    constructor(bodyA, pointB,length,stiffness){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: stiffness,
            length: length
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }

    display(){
            stroke(143,89,46);
            strokeWeight(4);
            var pointA = this.sling.bodyA;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.position.x, pointA.position.y, pointB.x, pointB.y);
    
        
    }

    
    
}