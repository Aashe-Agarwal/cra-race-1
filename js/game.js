class Game{
    constructor(){
        
    }
    getState(){
        database.ref("gamestate").on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate: state
        });
    }

    start(){
        if(gamestate === 0){
            player= new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1=createSprite(200,100);
        car2=createSprite(400,100);
        car3=createSprite(600,100);
        car4=createSprite(800,100);
        cars=[car1,car2,car3,car4]
    }
    

    play(){
        form.hide();
        Player.getPlayerInfo();
        

        if(allPlayers !== undefined){
            var index=0;
            var xpos=0;
            var ypos=0;

            for(var plr in allPlayers){
                index+=1;
                xpos+=200;
                ypos=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=xpos;
                cars[index-1].y=ypos;
                if(index=== player.index){
                    cars[index-1].shapeColor=rgb(random(0,255),random(0,255),random(0,255));
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
                
            }

        }
        if (keyDown("up")&&player.index!==null){
            player.distance+=5;
            player.update();
        }
        drawSprites();
    }

    

    
}