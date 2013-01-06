
module.exports = {
  'Distance': {
    'Dice':         require( './distance/dice' ),
    'Hamming':      require( './distance/hamming' ),
    'Jaro':         require( './distance/jaro' ),
    'Jaro-Winkler': require( './distance/jaro-winkler' ),
    'Levenshtein':  require( './distance/levenshtein' ),
  },
  'Phonetics': {
    'Caverphone': require( './phonetics/caverphone' ),
    'Soundex': require( './phonetics/soundex' ),
  },
}
