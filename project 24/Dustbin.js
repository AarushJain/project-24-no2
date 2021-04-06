    class dustbin{
    constructor(x, y){

    var options={
        isStatic:true,
    }
    this.x=x;
    this.y=y;
    this.width=200;
    this.angle=0;
    this.height=20;

    this.leftBody=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    
    Matter.Body.setAngle(this.leftBody,this.angle);
    
    World.add(world,this.leftBody);

    this.rightBody=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    
    Matter.Body.setAngle(this.rightBody,this.angle);
    
    World.add(world,this.rightBody);

    
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    
    Matter.Body.setAngle(this.bottomBody,this.angle);
    World.add(world,this.bottomBody);

    }

    display(){
        var leftPos=this.leftBody.position; 
        var rightPos=this.rightBody.position; 
        var bottomPos=this.bottomBody.position;    
        push();
        //rectMode(CENTRE);
        rect(0,0,this.width,this.height);
        pop();
        }

    }