
var assert = require( 'assert' )
var winkler = require( '../../lib/distance/jaro-winkler' )

module.exports = {
  
  'Martha': function() {
    var delta = winkler( 'MARTHA', 'MARHTA' )
    delta = Math.round( delta * 1000 ) / 1000
    assert.strictEqual( delta, 0.961 )
  },
  
  'Dwayne': function() {
    var delta = winkler( 'DWAYNE', 'DUANE' )
    delta = Math.round( delta * 1000 ) / 1000
    assert.strictEqual( delta, 0.84 )
  },
  
  'Dixon': function() {
    var delta = winkler( 'DIXON', 'DICKSONX' )
    delta = Math.round( delta * 1000 ) / 1000
    assert.strictEqual( delta, 0.813 )
  },
  
}
