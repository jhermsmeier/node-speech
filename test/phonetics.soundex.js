
var assert = require( 'assert' )
var soundex = require( '../lib/phonetics/soundex' )

module.exports = {
  'Soundex': {
    'Soundex':     function() { assert.equal( soundex( 'Soundex' ), 'S532' ) },
    'Example':     function() { assert.equal( soundex( 'Example' ), 'E251' ) },
    'Sownteks':    function() { assert.equal( soundex( 'Sownteks' ), 'S532' ) },
    'Ekzampul':    function() { assert.equal( soundex( 'Ekzampul' ), 'E251' ) },
    'Euler':       function() { assert.equal( soundex( 'Euler' ), 'E460' ) },
    'Gauss':       function() { assert.equal( soundex( 'Gauss' ), 'G200' ) },
    'Hilbert':     function() { assert.equal( soundex( 'Hilbert' ), 'H416' ) },
    'Knuth':       function() { assert.equal( soundex( 'Knuth' ), 'K530' ) },
    'Lloyd':       function() { assert.equal( soundex( 'Lloyd' ), 'L300' ) },
    'Lukasiewicz': function() { assert.equal( soundex( 'Lukasiewicz' ), 'L222' ) },
    'Ellery':      function() { assert.equal( soundex( 'Ellery' ), 'E460' ) },
    'Ghosh':       function() { assert.equal( soundex( 'Ghosh' ), 'G200' ) },
    'Heilbronn':   function() { assert.equal( soundex( 'Heilbronn' ), 'H416' ) },
    'Kant':        function() { assert.equal( soundex( 'Kant' ), 'K530' ) },
    'Ladd':        function() { assert.equal( soundex( 'Ladd' ), 'L300' ) },
    'Lissajous':   function() { assert.equal( soundex( 'Lissajous' ), 'L222' ) },
    'Wheaton':     function() { assert.equal( soundex( 'Wheaton' ), 'W350' ) },
    'Ashcraft':    function() { assert.equal( soundex( 'Ashcraft' ), 'A226' ) },
    'Burroughs':   function() { assert.equal( soundex( 'Burroughs' ), 'B622' ) },
    'Burrows':     function() { assert.equal( soundex( 'Burrows' ), 'B620' ) },
    'O\'Hara':     function() { assert.equal( soundex( 'O\'Hara' ), 'O600' ) },
  }
}
