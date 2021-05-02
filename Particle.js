class Particle{
    constructor(x,y,radius) {
        
        var options = {
            'restitution':0.4
            
        }
    
        this.body = Bodies.circle(x,y,radius,options)
        this.color=color(random(0,255), random(0,255), random(0,255))
        World.add(world,this.body)
        this.radius=radius
    }
    
    display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        noStroke()
        fill(this.color)
        ellipse(pos.x, pos.y, this.radius, this.radius)
        pop();
    
    }

}
