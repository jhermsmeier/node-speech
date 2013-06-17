
var phonetics = require( '../' ).phonetics

const A = 'Dagobert'

module.exports = {
  
  Soundex: function() {
    phonetics.soundex( A )
  },
  
  Metaphone: function() {
    phonetics.metaphone( A )
  },
  
  Caverphone: function() {
    phonetics.caverphone( A )
  },
  
}
