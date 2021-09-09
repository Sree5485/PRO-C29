class Stone{
    constructor(x,y,w,h,color){
        var options={
            isStatic:false,
            density:0.08
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w;
        this.h=h;
        this.color=color
        World.add(world, this.body);
    }
    show() {
        let pos = this.body.position;
        push();
        traslate (pos.x,pos.y)
        noStroke();
        fill(this.color);
        ellipseMode(CENTER)
        ellipse(0,0,this.w,this.h)
        pop();
      }
}