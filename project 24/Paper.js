class Paper{
    constructor(x, y, radius) {
    var options={
        isStatic:false,
        restitution:0,
        friction:1000000,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world,this.body);
}

display(){
var paperPos=this.body.position;    
push();
translate(paperPos.x,paperPos.y);
fill('red');
ellipseMode(CENTER);
ellipse(0,0,this.radius);
pop();
}
}




