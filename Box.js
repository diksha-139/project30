class Box {
    constructor(x,y,width,height,color){
      
        var options= {
            restitution :0.8,
            friction:0.3,
            density:0.4

        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.color=color;
        this.visibility=255;
        World.add(world,this.body);

    }
    display(){
        if(this.body.speed<5){
        var angle=this.body.angle;
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0,0,this.width,this.height);

        pop();
        }
        else{
            World.remove(world,this.body)
                push ()
                this.visibility=this.visibility-5;
                tint(255,this.visibility)
            
                pop ()

            }
        }

    }
