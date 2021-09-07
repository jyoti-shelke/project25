class paper{
    constructor(x,y,r)
    {

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=("paper.png");
        this.body=Bodies.circle(x,y,r,options);
        
        
        World.add(world, this.body);
    }

    display()
    {
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,0,this.r)



        
        pop();

    //    // circle(this.x, this.y,this.radius);


    //     var paperpos=this.body.position;		

	// 		push()
	// 		translate(paperpos.x, paperpos.y);
	// 		rectMode(CENTER)
	// 		//strokeWeight(4);
	// 		fill(255,0,255)
	// 		imageMode(CENTER);
	// 		image(this.image, 0,0,this.r, this.r)
	// 		//ellipse(0,0,this.r, this.r);
	// 		pop()
    }
}