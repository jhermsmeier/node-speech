
/**
 * SIFT 3
 * @see http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html
 * 
 * @param  {String} s1
 * @param  {String} s2
 * @param  {Number} max_offset
 * @return {Number} 
 */
function sift( s1, s2, max_offset ) {
  
  max_offset = max_offset != null
    ? max_offset : 5
  
  var s1l = s1.length
  var s2l = s2.length
  
  if( s1l === 0 ) return s2l
  if( s2l === 0 ) return s1l
  
  var i = 0
  var c = 0
  
  var offset1 = 0
  var offset2 = 0
  
  var lcs = 0
  
  while( ( c + offset1 < s1l ) && ( c + offset2 < s2l ) ) {
    if( s1[ c + offset1 ] === s2[ c + offset2 ] ) lcs++
    else {
      offset1 = 0
      offset2 = 0
      for( i = 0; i < max_offset; i++ ) {
        if( ( c + i < s1l ) && ( s1[ c + i ] == s2[c] ) ) {
          offset1 = i
          break
        }
        if( ( c + i < s2l ) && ( s1[c] == s2[ c + i ] ) ) {
          offset2 = i
          break
        }
      }
    }
    c++
  }
  
  return ( s1l + s2l ) / 2 - lcs
  
}

module.exports = sift
