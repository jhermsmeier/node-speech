module.exports = {
  sift: require( './distance/sift' ),
  hamming: require( './distance/hamming' ),
  levenshtein: require( './distance/levenshtein' ),
  dice: require( './distance/dice' ),
  jaro: require( './distance/jaro' ),
  jaro_winkler: require( './distance/jaro-winkler' ),
}
