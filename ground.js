class ground {
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
     this.x=x;
     this.y=y;
     this.width=w;
     this.height=h;
     this.body = Bodies.rectangle(x,y,w,h,options);
     World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("yellow");
    rect(0,0,1000,20); 
    pop();
}
}