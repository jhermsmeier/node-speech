
var assert = require( 'assert' )
var levenshtein = require( '../../speech/distance/levenshtein' )
var hamming = require( '../../speech/distance/hamming' )

var spec = [
  [ 'a', 'b', 1 ],
  [ 'a', 'a', 0 ],
  [ 'abc', 'cba', 2 ],
  [ 'night', 'nacht', 2 ],
  [ 'a', 'aaaaaaaaaaa', 10 ],
  [ 'aaaaaaaaaaa', 'a', 10 ],
  [ '', '', 0 ],
]

module.exports = {
  
  'Specification': function() {
    spec.map( function( argv ) {
      var a = argv[0], b = argv[1]
      var d = levenshtein( a, b )
      assert.strictEqual( d, argv[2], argv.join( ',' ) )
    })
  },
  
  'Always at least the difference of the sizes of the two strings': function() {
    spec.map( function( argv ) {
      var a = argv[0], b = argv[1]
      var d = levenshtein( a, b )
      assert( d >= Math.abs( a.length - b.length ), argv.join( ',' ) )
    })
  },
  
  'At most the length of the longer string': function() {
    spec.map( function( argv ) {
      var a = argv[0], b = argv[1]
      var d = levenshtein( a, b )
      assert( d <= Math.max( a.length, b.length ), argv.join( ',' ) )
    })
  },
  
  'Is zero if and only if the strings are identical': function() {
    spec.map( function( argv ) {
      var a = argv[0], b = argv[1]
      var d = levenshtein( a, b )
      if( d === 0 ) { assert( a === b, argv.join( ',' ) ) }
    })
  },
  
  'Strings are the same size, the Hamming distance is an upper bound on the Levenshtein distance': function() {
    spec.map( function( argv ) {
      var a = argv[0], b = argv[1]
      var d = levenshtein( a, b )
      if( a.length === b.length ) {
        assert( d <= hamming( a, b ), argv.join( ',' ) )
      }
    })
  },
  
}
