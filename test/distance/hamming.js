
var assert = require( 'assert' )
var hamming = require( '../../lib/distance/hamming' )

module.exports = {
  
  'Toned Roses': function() {
    assert.strictEqual( hamming( 'toned', 'roses' ), 3 )
  },
  
  '1011101 1001001': function() {
    assert.strictEqual( hamming( '1011101', '1001001' ), 2 )
  },
  
  '2173896 2233796': function() {
    assert.strictEqual( hamming( '2173896', '2233796' ), 3 )
  },
  
}
