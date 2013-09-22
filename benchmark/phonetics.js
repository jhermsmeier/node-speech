
var phonetics = require( '../' ).phonetics

const A = 'Dagobert'

suite( function() {
  
  bench( 'Soundex', function() {
    phonetics.soundex( A )
  })
  
  bench( 'Metaphone', function() {
    phonetics.metaphone( A )
  })
  
  bench( 'Caverphone', function() {
    phonetics.caverphone( A )
  })
  
})
