
var assert = require( 'assert' )

function hamming( s1, s2 ) {
  
  assert.equal( s1.length, s2.length )
  
  var d = 0, n = s1.length
  
  while( n-- ) {
    d += s1[n] === s2[n] ? 0 : 1
  }
  
  return d
  
}

module.exports = hamming
