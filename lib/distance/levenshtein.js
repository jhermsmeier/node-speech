
/**
 * Computes the Levenshtein distance
 * between two sequences.
 * 
 * @param  {String} source
 * @param  {String} target
 * @param  {Object} opt
 * @return {Number} distance
 */
function levenshtein( source, target, opt ) {
  
  opt = opt || {}
  
  opt.insertion    = opt.insertion || 1
  opt.deletion     = opt.deletion || 1
  opt.substitution = opt.substitution || 1
  
  var row, col, ins, del, sub
  var s = source.length
  var t = target.length
  var d = [[0]]
  
  for( row = 1; row <= s; row++ ) {
    d[row] = []
    d[row][0] = d[ row - 1 ] + opt.deletion
  }
  
  for( col = 1; col <= t; col++ ) {
    d[0][col] = d[0][ col - 1 ] + opt.insertion
  }
  
  for( row = 1; row <= s; row++ ) {
    for( col = 1; col <= t; col++ ) {
      
      ins = d[row][ col - 1 ] + opt.insertion
      del = d[ row - 1 ][col] + opt.deletion
      sub = d[ row - 1 ][ col - 1 ]
      
      if( source[ row - 1 ] !== target[ row - 1 ] ) {
        sub += opt.substitution
      }
      
      d[row][col] = Math.min( ins, del, sub )
      
    }
  }
  
  return d[s][t]
  
}

module.exports = levenshtein
