class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("MysteryMafia");
      this.title.style('color', "red");
      this.title.position(displayWidth/2 - 50, 0);
        
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

       //logic for assigning characters 
       var arrLength,roleIndex,role;
       var charArray = ["detective","nurse","killer", "civilian"];

        if(charArray.length>0){
            arrLength = charArray.length;
            roleIndex = Math.round(random(0,arrLength -1));
            role = charArray[roleIndex];
            console.log(role);
            
            console.log(charArray);
            removeItemOnce(charArray,role);
        }

        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.status = 0;
        player.character =role;
        player.vote = 0;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        //Player.updateCarAtEnd(0);
        player.removePlayer();
        location.reload();
      });
  
    }

  
  }
  