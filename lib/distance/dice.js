
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
  
  console.log( sources, targets )
  
  var intersection = 0
  var union = sources.length + targets.length
  
  var i, k
  var source_count = sources.length
  var target_count = targets.length
  
  for( i = 0; i < source_count; i++ ) {
    source = sources[i]
    for( k = 0; k < target_count; k++ ) {
      target = targets[k]
      if( source == target ) {
        intersection++
        delete targets[k]
        break
      }
    }
  }
  
  console.log( 'union:', union )
  
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
  
  var i, k, word, bigrams, bigram_count
  
  var words      = str.split( /\W+/ )
  var word_count = words.length
  var pairs      = []
  
  for( i = 0; i < word_count; i++ ) {
    
    word         = words[i]
    bigram_count = word.length - 1
    bigrams      = new Array( bigram_count )
    
    for( k = 0; k < bigram_count; k++ ) {
      bigrams[k] = word.substring( k, k + 2 )
    }
    
    pairs = pairs.concat( bigrams )
    
  }
  
  return pairs
  
}

module.exports = dice
