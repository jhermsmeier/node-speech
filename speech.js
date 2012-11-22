
module.exports = {
  
  distance: {
    sift:         require( './lib/distance/sift' ),
    levenshtein:  require( './lib/distance/levenshtein' ),
    dice:         require( './lib/distance/dice' ),
    jaro:         require( './lib/distance/jaro' ),
    jaro_winkler: require( './lib/distance/jaro-winkler' ),
  },
  
  TfIdf: require( './lib/tf-idf' ),
  
  Syntax: {
    /* Learner: require( './lib/learner' ) */
  },
  
  // C++ Bindings
  Recognition: { /* not implemented */ },
  TTS: { /* not implemented */ },
  
}
