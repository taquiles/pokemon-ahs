
function Grid () {
    this.grid = [[]];
  }
  
  // grid Setter
  //
  Grid.prototype.eatPokemon = function (pos) {
    if (!this.grid[pos.x]) {
      this.grid[pos.x] = [];  
    }
    this.grid[pos.x][pos.y] = 1;
    // console.log ('Just ate a Pokemon at: ', pos);
  }
  
  // grid getter
  //
  Grid.prototype.eatenPokemon = function (pos) {
    if (!!(this.grid[pos.x])) {
      if (!!this.grid[pos.x][pos.y]) {      
        // console.log ('Pokemon already Eaten at: ', pos);
        return 1;
      }
    } 
     
    return 0
  }


  module.exports=Grid;