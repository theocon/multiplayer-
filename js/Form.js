class Form {
  constructor(){
    this.titleImg = createImg("assets/title.png");
    this.input = createInput("").attribute("placeholder", "Enter your name")
    this.playButton = createButton("Play");
    this.greeting = createElement("h2");
}

  setElementsPosition(){
    this.titleImg.position(130,30);
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-100,height/2-20);
    this.greeting.position(width/2-250, height/2-100);
  }

  setElementsStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide(){
    this.greeting.hide();
    this.input.hide();
    this.playButton.hide();
  }

  handleMousePressed(){
    this.playButton.mousePressed(
        //anonymous function /arrow function 
        ()=>{
            this.input.hide();
            this.playButton.hide();

            var message = `
            Hello ${this.input.value()}</br>
            wait for another player to join...
            `;
            this.greeting.html(message);
            playerCount += 1;
            player.name = this.input.value();
            player.index = playerCount;
            player.addPlayer();
            player.updateCount(playerCount);
        }
    )

  }

  display(){
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    
  }
}
