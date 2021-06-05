class Game{
constructor(){

}
GetState(){
    var GS=database.ref("gameState")
    GS.on("value",function(data){
        gameState=data.val()
    })
}
updateState(state){
    database.ref("/").update({
        gameState:state
    })
}
 async Start(){
     if (gameState===0){
         player=new Player()
         var playerCountRef = await database.ref('playerCount').once("value"); 
         if(playerCountRef.exists())
         { playerCount = playerCountRef.val();
             player.getCount(); }
        
         form= new Form()
         form.display() 
     }
     car1=createSprite(200,500);
     car2=createSprite(400,500);
     car3=createSprite(600,500);
     car4=createSprite(800,500);
     cars=[car1,car2,car3,car4]

 }
 play(){
form.hide()
textSize(30)
text("Game Start",100,100)
Player.getPlayerInfo()
if(allPlayers!==undefined){
    var index=0
    var x=0
    var y
    for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
  if(index===player.index){
    camera.position.x=windowWidth/2
    camera.position.y=cars[index-1].y
    cars[index-1].shapeColor="red"
  }
    
   
}
}
drawSprites()
if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance=player.distance+30
    player.update()
}
 }
 
}