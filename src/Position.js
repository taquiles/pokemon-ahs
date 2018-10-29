const NORTH = 'N';
const SOUTH = 'S';
const EAST  = 'E';
const WEST  = 'O';


function Position () {
    this.position = {x: 0, y: 0};
  }
  
  //Setter
  //
  Position.prototype.changePosition = function (move) {
  
    let xMove= this.position.x+ (move===NORTH ? +1 : move==SOUTH ? -1 : 0);
    let yMove= this.position.y+ (move===EAST  ? +1 : move===WEST  ? -1: 0);
    
    this.position = {
      x : xMove,
      y : yMove
    }
  }
  
  //Getter
  //
  Position.prototype.getPos = function () {
    return this.position;
  }
  
  module.exports=Position;