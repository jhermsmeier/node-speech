
function soundex( s ) {
  
  var codes = soundex.codes
  
  var a = s.toLowerCase().split( '' )
  var f = a.shift()
  
  var r = a
    .map( function( v ) { return codes[v] })
    .filter( function( v, i, a ) {
      return i === 0
        ? v !== codes[f]
        : v !== a[ i - 1 ]
    }).join( '' )
  
  return ( f + r + '000' )
    .substring( 0, 4 )
  
}

soundex.codes = {
  a: '', e: '', i: '', o: '', u: '',
  b: 1, f: 1, p: 1, v: 1,
  c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2,
  d: 3, t: 3,
  l: 4,
  m: 5, n: 5,
  r: 6
}

module.exports = soundex
