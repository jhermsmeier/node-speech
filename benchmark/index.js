
var Benchmark = require( 'benchmark' )
var path = require( 'path' )

function run( module ) {
  
  console.log( '\n' + path.basename( module ).toUpperCase(), '\n' )
  
  var cases = require( './' + module )
  var suite = new Benchmark.Suite()
    .on( 'cycle', function( event ) {
      console.log( '', event.target.toString() )
    })
    .on( 'complete', function() {
      console.log( '\n', 'Fastest is', this.filter( 'fastest' ).pluck( 'name' ), '\n' )
    })
  
  for( var label in cases ) {
    suite.add( label, cases[ label ] )
  }
  
  suite.run()
  
}

var argv = process.argv.slice( 2 )
var modules = [ 'distance', 'phonetics' ]

!( argv.length ? argv : modules ).forEach( run )
