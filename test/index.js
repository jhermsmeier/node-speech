
module.exports = {
  'Distance': {
    'Dice':         require( './distance/dice' ),
    'Jaro':         require( './distance/jaro' ),
    'Jaro-Winkler': require( './distance/jaro-winkler' ),
    'Levenshtein':  require( './distance/levenshtein' ),
  },
  'Phonetics': {
    'Caverphone': require( './phonetics/caverphone' ),
    'Soundex': require( './phonetics/soundex' ),
  },
}
