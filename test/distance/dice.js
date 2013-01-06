
var assert = require( 'assert' )
var dice = require( '../../lib/distance/dice' )

module.exports = {
  'Good night': function() { assert.equal( dice( 'night', 'nacht' ), 0.25 ) }
}
