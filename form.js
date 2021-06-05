class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(windowWidth/2-90,0);
  
      this.input.position(windowWidth/2-70, 160);
      this.button.position(windowWidth/2-10, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name+" Waiting For Others To Join")
        this.greeting.position(windowWidth/2-130, 100);
      });
  
    }
  }