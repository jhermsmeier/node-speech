
var assert = require( 'assert' )
var jaro = require( '../../lib/distance/jaro' )

module.exports = {
  
  'Martha': function() {
    var delta = jaro( 'MARTHA', 'MARHTA' )
    delta = Math.round( delta * 1000 ) / 1000
    assert.strictEqual( delta, 0.944 )
  },
  
  'Dwayne': function() {
    var delta = jaro( 'DWAYNE', 'DUANE' )
    delta = Math.round( delta * 1000 ) / 1000
    assert.strictEqual( delta, 0.822 )
  },
  
  'Dixon': function() {
    var delta = jaro( 'DIXON', 'DICKSONX' )
    delta = Math.round( delta * 1000 ) / 1000
    assert.strictEqual( delta, 0.767 )
  },
  
}
