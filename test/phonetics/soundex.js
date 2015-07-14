
var assert = require( 'assert' )
var soundex = require( '../../lib/phonetics/soundex' )

module.exports = {
  'Soundex':     function() { assert.equal( soundex( 'Soundex' ), 's532' ) },
  'Example':     function() { assert.equal( soundex( 'Example' ), 'e251' ) },
  'Sownteks':    function() { assert.equal( soundex( 'Sownteks' ), 's532' ) },
  'Ekzampul':    function() { assert.equal( soundex( 'Ekzampul' ), 'e251' ) },
  'Euler':       function() { assert.equal( soundex( 'Euler' ), 'e460' ) },
  'Gauss':       function() { assert.equal( soundex( 'Gauss' ), 'g200' ) },
  'Hilbert':     function() { assert.equal( soundex( 'Hilbert' ), 'h416' ) },
  'Knuth':       function() { assert.equal( soundex( 'Knuth' ), 'k530' ) },
  'Lloyd':       function() { assert.equal( soundex( 'Lloyd' ), 'l300' ) },
  'Lukasiewicz': function() { assert.equal( soundex( 'Lukasiewicz' ), 'l222' ) },
  'Ellery':      function() { assert.equal( soundex( 'Ellery' ), 'e460' ) },
  'Ghosh':       function() { assert.equal( soundex( 'Ghosh' ), 'g200' ) },
  'Heilbronn':   function() { assert.equal( soundex( 'Heilbronn' ), 'h416' ) },
  'Kant':        function() { assert.equal( soundex( 'Kant' ), 'k530' ) },
  'Ladd':        function() { assert.equal( soundex( 'Ladd' ), 'l300' ) },
  'Lissajous':   function() { assert.equal( soundex( 'Lissajous' ), 'l222' ) },
  'Wheaton':     function() { assert.equal( soundex( 'Wheaton' ), 'w350' ) },
  'Ashcraft':    function() { assert.equal( soundex( 'Ashcraft' ), 'a226' ) },
  'Burroughs':   function() { assert.equal( soundex( 'Burroughs' ), 'b622' ) },
  'Burrows':     function() { assert.equal( soundex( 'Burrows' ), 'b620' ) },
  'O\'Hara':     function() { assert.equal( soundex( 'O\'Hara' ), 'o600' ) },
}
