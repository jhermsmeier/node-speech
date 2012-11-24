
caverphone.transforms = [
  // Remove non-alpha chars
  /[^a-z]/g,   '',
  // Remove trailing 'e'
  /e$/,        '',
  // Beginnings
  /^cough/,    'cou2f',
  /^rough/,    'rou2f',
  /^tough/,    'tou2f',
  /^enough/,   'enou2f',
  /^trough/,   'trou2f',
  /^gn/,       '2n',
  // Ending
  /mb$/,       'm2',
  // Replacements
  /cq/g,       '2q',
  /ci/g,       'si',
  /ce/g,       'se',
  /cy/g,       'sy',
  /tch/g,      '2ch',
  /c/g,        'k',
  /q/g,        'k',
  /x/g,        'k',
  /v/g,        'f',
  /dg/g,       '2g',
  /tio/g,      'sio',
  /tia/g,      'sia',
  /d/g,        't',
  /ph/g,       'fh',
  /b/g,        'p',
  /sh/g,       's2',
  /z/g,        's',
  /^[aeiou]/g, 'A',
  /[aeiou]/g,  '3',
  /j/g,        'y',
  /^y3/,       'Y3',
  /^y/,        'A',
  /y/g,        '3',
  /3gh3/g,     '3kh3',
  /gh/g,       '22',
  /g/g,        'k',
  /s+/g,       'S',
  /t+/g,       'T',
  /p+/g,       'P',
  /k+/g,       'K',
  /f+/g,       'F',
  /m+/g,       'M',
  /n+/g,       'N',
  /w3/g,       'W3',
  /wh3/g,      'Wh3',
  /w$/,        '3',
  /w/g,        '2',
  /^h/,        'A',
  /h/g,        '2',
  /r3/g,       'R3',
  /r$/,        '3',
  /r/g,        '2',
  /l3/g,       'L3',
  /l$/,        '3',
  /l/g,        '2',
  // Removals
  /2/g,        '',
  /3$/,        'A',
  /3/g,        ''
]

function caverphone( s ) {
  
  var transforms = caverphone.transforms
  var mutations = transforms.length
  
  s = s.toLowerCase()
  
  var x, y
  
  for( var i = 0; i < mutations; i += 2 ) {
    s = s.replace( transforms[i], transforms[ i + 1 ] )
  }
  
  return ( s + '1111111111' ).substring( 0, 10 )
  
}

module.exports = caverphone
