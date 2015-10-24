
function caverphone( s ) {
  
  var mutations = caverphone.patterns.length
  
  s = s.toLowerCase()
  
  for( var i = 0; i < mutations; i++ ) {
    s = s.replace(
      caverphone.patterns[i],
      caverphone.replacements[i]
    )
  }
  
  return ( s + '1111111111' ).substring( 0, 10 )
  
}

module.exports = caverphone

caverphone.patterns = [
  // Remove non-alpha chars
  /[^a-z]/g,
  // Remove trailing 'e'
  /e$/,
  // Beginnings
  /^cough/, /^rough/, /^tough/,
  /^enough/, /^trough/, /^gn/,
  // Ending
  /mb$/,
  // Replacements
  /cq/g,
  /ci/g,
  /ce/g,
  /cy/g,
  /tch/g,
  /c/g,
  /q/g,
  /x/g,
  /v/g,
  /dg/g,
  /tio/g,
  /tia/g,
  /d/g,
  /ph/g,
  /b/g,
  /sh/g,
  /z/g,
  /^[aeiou]/g,
  /[aeiou]/g,
  /j/g,
  /^y3/,
  /^y/,
  /y/g,
  /3gh3/g,
  /gh/g,
  /g/g,
  /s+/g,
  /t+/g,
  /p+/g,
  /k+/g,
  /f+/g,
  /m+/g,
  /n+/g,
  /w3/g,
  /wh3/g,
  /w$/,
  /w/g,
  /^h/,
  /h/g,
  /r3/g,
  /r$/,
  /r/g,
  /l3/g,
  /l$/,
  /l/g,
  // Removals
  /2/g, /3$/, /3/g,
]

caverphone.replacements = [
  // Remove non-alpha chars
  '',
  // Remove trailing 'e'
  '',
  // Beginnings
  'cou2f', 'rou2f', 'tou2f',
  'enou2f', 'trou2f', '2n',
  // Ending
  'm2',
  // Replacements
  '2q',
  'si',
  'se',
  'sy',
  '2ch',
  'k',
  'k',
  'k',
  'f',
  '2g',
  'sio',
  'sia',
  't',
  'fh',
  'p',
  's2',
  's',
  'A',
  '3',
  'y',
  'Y3',
  'A',
  '3',
  '3kh3',
  '22',
  'k',
  'S',
  'T',
  'P',
  'K',
  'F',
  'M',
  'N',
  'W3',
  'Wh3',
  '3',
  '2',
  'A',
  '2',
  'R3',
  '3',
  '2',
  'L3',
  '3',
  '2',
  // Removals
  '', 'A', ''
]
