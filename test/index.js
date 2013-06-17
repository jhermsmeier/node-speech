
module.exports = {
  'Distance': {
    'Dice':         require( './distance/dice' ),
    'Hamming':      require( './distance/hamming' ),
    'Jaro':         require( './distance/jaro' ),
    'Jaro-Winkler': require( './distance/jaro-winkler' ),
    'Levenshtein':  require( './distance/levenshtein' ),
    'SIFT':         require( './distance/sift' ),
  },
  'Phonetics': {
    'Caverphone': require( './phonetics/caverphone' ),
    'Soundex': require( './phonetics/soundex' ),
    'Metaphone': require( './phonetics/metaphone' ),
  },
}
