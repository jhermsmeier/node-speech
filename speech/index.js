
module.exports = {
  
  distance: {
    sift:         require( './distance/sift' ),
    hamming:      require( './distance/hamming' ),
    levenshtein:  require( './distance/levenshtein' ),
    dice:         require( './distance/dice' ),
    jaro:         require( './distance/jaro' ),
    jaro_winkler: require( './distance/jaro-winkler' ),
  },
  
  phonetics: {
    soundex:          require( './phonetics/soundex' ),
    caverphone:       require( './phonetics/caverphone' ),
    metaphone:        require( './phonetics/metaphone' ),
  },
  
  TfIdf: require( './tf-idf' ),
  
}
