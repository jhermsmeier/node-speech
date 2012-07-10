
function jaro( source, target ) {
  
  source = ( source + '' ).toLowercase()
  target = ( target + '' ).toLowercase()
  
  var source_matches = new Array( source.length )
  var target_matches = new Array( target.length )
  
  var range = Math.max( source.length, target.length )
      range = (( range / 2 ) - 1 ) | 0
  
  var matched = false
  var matches = 0
  var transpositions = 0
  
  var i, k
  
  for( i = 0; i < source.length; i++ ) {
    matched = false
    if( source[i] === target[i] ) {
      matched = true
      matches++
      continue
    } else {
      k = i <= range ? 0 : i - range
      for( ; k <= i + range && k < target.length; k++ ) {
        if( source[i] === target[k] ) {
          if( !source_matches[i] && !target_matches[k] ) {
            matches++
          }
          matched = true
          break
        }
      }
    }
  }
  
  if( matches === 0 ) {
    return matches
  }
  
  for( i = 0, k = 0; i < source.length; i++ ) {
    if( source_matches[i] ) {
      
      while( !target_matches[k] && k < target_matches.length ) {
        k++
      }
      
      if( source[i] !== target[k] && k < target_matches.length ) {
        transpositions++
      }
      
      k++
      
    }
  }
  
  return (
    matches / source.length +
    matches / target.length +
    ( matches - transpositions / 2 ) / matches
  ) / 3
  
}

module.exports = jaro
