
var distance = require( '../' ).distance

const A = 'Dagobert Duck'
const B = 'Dragobert Huk'

suite( function() {
  
  bench( 'SIFT', function() {
    distance.sift( A, B )
  })
  
  bench( 'Hamming', function() {
    distance.hamming( A, B )
  })
  
  bench( 'Levenshtein', function() {
    distance.levenshtein( A, B )
  })
  
  bench( 'Dice', function() {
    distance.dice( A, B )
  })
  
  bench( 'Jaro', function() {
    distance.jaro( A, B )
  })
  
  bench( 'JaroWinkler', function() {
    distance.jaro_winkler( A, B )
  })
  
})
