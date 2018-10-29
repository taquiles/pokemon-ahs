const dataTests = require ('./pokemon-eater.data.tests.js');
const pokemonEater= require('./pokemon-eater');

describe ("Test Pokemon Hunting - E2E Tests", () => {

  dataTests.map ((data) => {  
    
    if (data.ms.length<20) {
      data.ds = data.ds+" "+data.ms
    }

    test (data.ds, () => {
      expect (pokemonEater(data.ms)).toBe (data.er)
    })
  })
})
