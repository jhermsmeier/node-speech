
/**
 * Computes dice's coefficient.
 * 
 * @param  {String} source
 * @param  {String} target
 * @return {Number} dice coefficient
 */
function dice( source, target ) {
  
  var sources = dice.prepare( source )
  var targets = dice.prepare( target )
  
  var i, k, intersection = 0
  var source_count = sources.length
  var target_count = targets.length
  var union = source_count + target_count
  
  for( i = 0; i < source_count; i++ ) {
    source = sources[i]
    for( k = 0; k < target_count; k++ ) {
      target = targets[k]
      if( source === target ) {
        intersection++
        targets[k] = undefined
        break
      }
    }
  }
  
  return 2 * intersection / union
  
}

/**
 * Preprocesses the strings to be compared.
 * 
 * @param  {String} str
 * @return {Array} 
 */
dice.prepare = function( str ) {
  
  str = ( str + '' ).toLowerCase().trim()
  
  var i, k, bigrams
  
  var words      = str.split( /\W+/ )
  var word_count = words.length
  var pairs      = []
  
  for( i = 0; i < word_count; i++ ) {
    
    bigrams = words[i].length - 1
    
    for( k = 0; k < bigrams; k++ ) {
      pairs.push( words[i].substring( k, k + 2 ) )
    }
    
  }
  
  return pairs
  
}

module.exports = dice
