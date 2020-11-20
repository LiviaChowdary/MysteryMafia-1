class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.character = null;
      this.status = null;
      this.votes = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        character:this.character,
        status:this.status,
        votes:this.vote,
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    
    removePlayer(){
      var playerRemoveRef = database.ref('players');
      playerRemoveRef.remove();
    }
  }
  