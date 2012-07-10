
var Speech = global.speech = {
  
  distance: {
    levenshtein: require( './lib/distance/levenshtein' )
  },
  
  TfIdf: require( './lib/tf-idf' ),
  
  // C++ Bindings
  Recognition: { /* not implemented */ },
  TTS: { /* not implemented */ },
  
}

module.exports = Speech
