class Package {
    constructor() {
        var options = {
            isStatic : true,
            restituion : 2.0,
           friction :0.5, 
            density :1.0
            
        }

        this.body=bodies.rectangle(20,30,40,50,options);
        this.body.width=40;
        this.body.height=50;
        World.add(world,packageBody)
      
        console.log(packageBody);
    }
    display(){
        push();
        var angle=this.body.angle
        rotate(angle)
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height);
        pop();
    }
}