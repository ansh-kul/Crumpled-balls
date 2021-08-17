class Dustbin
{
 constructor(x,y)
 {
 
 this.x=x
 this.y=y
this.bottom=Bodies.rectangle(x,y+40,100,20,{isStatic:true})
this.left=Bodies.rectangle(x-60,y,20,100,{isStatic:true})
this.right=Bodies.rectangle(x+60,y,20,100,{isStatic:true})
World.add(world,this.bottom)
World.add(world,this.left)
World.add(world,this.right)
 }   
 display()
{
push()
translate(this.left.position.x,this.left.position.y)
rectMode(CENTER)
fill(255)
rect(0,0,20,100)
pop() 

push()
translate(this.right.position.x,this.right.position.y)
rectMode(CENTER)
fill(255)
rect(0,0,20,100)
pop()

push()
translate(this.bottom.position.x,this.bottom.position.y)
rectMode(CENTER)
fill(255)
rect(0,0,100,20)
pop()
}
}