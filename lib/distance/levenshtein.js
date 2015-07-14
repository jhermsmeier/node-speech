
/**
 * Computes the Levenshtein distance
 * between two sequences.
 * 
 * @param  {String} source
 * @param  {String} target
 * @return {Number} distance
 */
function levenshtein( source, target ) {
  
  var s = source.length
  var t = target.length
  
  if( s === 0 ) return t
  if( t === 0 ) return s
  
  var i, k, matrix = []
  
  for( i = 0; i <= t; i++ ) {
    matrix[i] = [ i ]
  }
  
  for( k = 0; k <= s; k++ )
    matrix[0][k] = k
  
  for( i = 1; i <= t; i++ ) {
    for( k = 1; k <= s; k++ ) {
      ( target.charAt( i - 1 ) === source.charAt( k - 1 ) )
        ? matrix[i][k] = matrix[ i - 1 ][ k - 1 ]
        : matrix[i][k] = Math.min(
            matrix[ i - 1 ][ k - 1 ] + 1,
            Math.min(
              matrix[i][ k - 1 ] + 1,
              matrix[ i - 1 ][k] + 1
            )
          )
    }
  }
  
  return matrix[t][s]
  
}

module.exports = levenshtein
