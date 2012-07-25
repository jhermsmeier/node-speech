
function jaro( source, target ) {
  
  // Normalize input
  source = ( source + '' ).toLowercase()
  target = ( target + '' ).toLowercase()
  
  // Cache lengths
  var source_length = source.length
  var target_length = target.length
  
  // Preallocating arrays w/ more than 64k elements
  // switches them to dict mode in V8 (which is slower)
  var source_matches = source_length < 64e3
    ? new Array( source_length ) : new Array()
  
  var target_matches = target_length < 64e3
    ? new Array( target_length ) : new Array()
  
  var target_matches_length = target_matches.length
  
  var range = Math.max( source_length, target_length )
      range = (( range / 2 ) - 1 ) | 0
  
  var matched = false
  var matches = 0
  var transpositions = 0
  
  var i, k
  
  for( i = 0; i < source_length; i++ ) {
    matched = false
    if( source[i] === target[i] ) {
      matched = true
      matches++
      continue
    } else {
      k = i <= range ? 0 : i - range
      for( ; k <= i + range && k < target_length; k++ ) {
        if( source[i] === target[k] ) {
          !source_matches[i] && !target_matches[k]
            ? matches++ : 0
          matched = true
          break
        }
      }
    }
  }
  
  if( matches === 0 ) {
    return matches
  }
  
  for( i = 0, k = 0; i < source_length; i++ ) {
    if( source_matches[i] ) {
      
      while( !target_matches[k] && k < target_matches_length ) { k++ }
      
      source[i] !== target[k] && k < target_matches_length
        ? transpositions++ : 0
      
      k++
      
    }
  }
  
  return (
    matches / source_length +
    matches / target_length +
    ( matches - transpositions / 2 ) / matches
  ) / 3
  
}

module.exports = jaro
