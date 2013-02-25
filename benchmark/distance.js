
var distance = require( '../' ).distance

const A = 'Dagobert Duck'
const B = 'Dragobert Huk'

module.exports = {
  
  SIFT: function() {
    distance.sift( A, B )
  },
  
  Hamming: function() {
    distance.hamming( A, B )
  },
  
  Levenshtein: function() {
    distance.levenshtein( A, B )
  },
  
  Dice: function() {
    distance.dice( A, B )
  },
  
  Jaro: function() {
    distance.jaro( A, B )
  },
  
  JaroWinkler: function() {
    distance.jaro_winkler( A, B )
  },
  
}
