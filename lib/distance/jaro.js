
/**
 * [jaro description]
 * @param  {String} s1
 * @param  {String} s2
 * @return {Number}
 */
function jaro( s1, s2 ) {
  
  // Normalize input
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()
  
  // Cache lengths
  var s1_length = s1.length
  var s2_length = s2.length
  
  var m1 = new Array( s1_length )
  var m2 = new Array( s2_length )
  
  var range = Math.max( s1_length, s2_length )
      range = (( range / 2 ) - 1 ) | 0
  
  var matched = false
  var m = 0
  var t = 0
  
  var i, k
  
  for( i = 0; i < s1_length; i++ ) {
    matched = false
    if( s1[i] === s2[i] ) {
      matched = m1[i] = m2[i] = true
      m++
      continue
    } else {
      k = ( i <= range ) ? 0 : i - range
      for( ; ( k <= i + range ) && ( k < s2_length ) && !matched; k++ ) {
        if( s1[i] === s2[k] ) {
          if( !m1[i] && !m2[k] ) { m++ }
          matched = m1[i] = m2[k] = true
          break
        }
      }
    }
  }
  
  if( m === 0 ) {
    return m
  }
  
  for( i = 0, k = 0; i < s1_length; i++ ) {
    if( m1[k] ) {
      while( !m2[k] && k < s2_length )       { k++ }
      if( s1[i] !== s2[k] && k < s2_length ) { t++ }
      k++
    }
  }
  
  return (
    m / s1_length +
    m / s2_length +
    ( m - t / 2 ) / m
  ) / 3
  
}

module.exports = jaro
