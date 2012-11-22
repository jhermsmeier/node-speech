
module.exports = {
  
  distance: {
    sift:         require( './lib/distance/sift' ),
    hamming:      require( './lib/distance/hamming' ),
    levenshtein:  require( './lib/distance/levenshtein' ),
    dice:         require( './lib/distance/dice' ),
    jaro:         require( './lib/distance/jaro' ),
    jaro_winkler: require( './lib/distance/jaro-winkler' ),
  },
  
  phonetics: {
    soundex:    require( './lib/phonetics/soundex' ),
    caverphone: require( './lib/phonetics/caverphone' ),
  },
  
  TfIdf: require( './lib/tf-idf' ),
  
  Syntax: {
    /* Learner: require( './lib/learner' ) */
  },
  
  // C++ Bindings
  Recognition: { /* not implemented */ },
  TTS: { /* not implemented */ },
  
}
