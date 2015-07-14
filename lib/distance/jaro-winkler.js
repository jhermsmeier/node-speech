
var jaro = require( './jaro' )

/**
 * The Jaro–Winkler distance is a measure of similarity between two strings.
 * It is a variant of the Jaro distance metric and mainly used in the area
 * of record linkage (duplicate detection).
 * 
 * The higher the Jaro–Winkler distance for two strings is,
 * the more similar the strings are.
 * 
 * The Jaro–Winkler distance metric is designed and best suited
 * for short strings such as person names.
 * The score is normalized such that 0 equates
 * to no similarity and 1 is an exact match.
 * 
 * @param  {String} s1
 * @param  {String} s2
 * @param  {Number} p
 * @return {Number}
 */
function jaro_winkler( s1, s2, p ) {
  
  // `p` is a constant scaling factor for how much
  // the score is adjusted upwards for having common prefixes.
  // `p` should not exceed 0.25, otherwise the distance
  // can become larger than 1. The standard value for
  // this constant in Winkler's work is `p = 0.1`
  p = p || 0.1
  
  if( p > 0.25 ) {
    throw new Error( 'p should not exceed 0.25' )
  }
  
  // Compute the Jaro distance
  var dj = jaro( s1, s2 )
  
  // `l` is the length of common prefix at the start
  // of the string up to a maximum of 4 characters
  var i, l = 0
  var c = Math.min( s1.length, s2.length, 4 )
  
  for( i = 0; i < c; i++ ) {
    if( s1[i] === s2[i] ) { l++ }
  }
  
  return dj + ( l * p * ( 1 - dj ))
  
}

module.exports = jaro_winkler
