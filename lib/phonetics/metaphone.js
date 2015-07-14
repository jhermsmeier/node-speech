
function metaphone( s ) {
  
  s = s.toLowerCase()
  
  // Drop duplicate adjacent letters, except for C
  s = s.replace( /([^c])\1/g, '$1' )
  
  // If the word begins with 'KN', 'GN', 'PN', 'AE', 'WR', drop the first letter.
  s = s.match( /^(kn|gn|pn|ae|wr)/ ) ? s.substr( 1 ) : s
  
  // Drop 'B' if after 'M' at the end of the word.
  s = s.replace( /mb$/, 'm' )
  
  // 'C' transforms to 'X' if followed by 'IA' or 'H'
  // (unless in latter case, it is part of '-SCH-', in which case it transforms to 'K').
  s = s.replace( /cia/g, 'xia' )
  s = s.replace( /([^s]|^)(c)(h)/g, '$1x$3' )
  // 'C' transforms to 'S' if followed by 'I', 'E', or 'Y'.
  s = s.replace( /c(i|e|y)/g, 's$1' )
  // Otherwise, 'C' transforms to 'K'.
  s = s.replace( /c/g, 'k' )
  
  // 'D' transforms to 'J' if followed by 'GE', 'GY', or 'GI'.
  s = s.replace( /d(ge|gy|gi)/g, 'j$1' )
  // Otherwise, 'D' transforms to 'T'.
  s = s.replace( /d/g, 't' )
  
  // Drop 'G' if followed by 'H' and 'H' is not at the end or before a vowel.
  s = s.replace( /gh(^$|[^aeiou])/g, 'h$1' )
  // Drop 'G' if followed by 'N' or 'NED' and is at the end.
  s = s.replace( /g(n|ned)$/g, '$1' )
  
  // 'G' transforms to 'J' if before 'I', 'E', or 'Y', and it is not in 'GG'.
  s = s.replace( /([^g]|^)(g)(i|e|y)/g, '$1j$3' )
  s = s.replace( /gg/g, 'g' )
  // Otherwise, 'G' transforms to 'K'.
  s = s.replace( /g/g, 'k' )
  
  // Drop 'H' if after vowel and not before a vowel.
  s = s.replace( /(aeiou)h([^aeiou])/g, '' )
  
  // 'CK' transforms to 'K'.
  s = s.replace( /ck/g, 'k' )
  
  // 'PH' transforms to 'F'.
  s = s.replace( /ph/g, 'f' )
  
  // 'Q' transforms to 'K'.
  s = s.replace( /q/g, 'k' )
  
  // 'S' transforms to 'X' if followed by 'H', 'IO', or 'IA'.
  s = s.replace( /s(h|io|ia)/g, 'x$1' )
  
  // 'T' transforms to 'X' if followed by 'IA' or 'IO'.
  s = s.replace( /t(io|ia)/g, 'x$1' )
  // 'TH' transforms to '0'.
  s = s.replace( /th/g, '0' )
  // Drop 'T' if followed by 'CH'.
  s = s.replace( /tch/g, 'ch' )
  
  // 'V' transforms to 'F'.
  s = s.replace( /v/g, 'f' )
  
  // 'WH' transforms to 'W' if at the beginning.
  s = s.replace( /^wh/, 'w' )
  // Drop 'W' if not followed by a vowel.
  s = s.replace( /w([^aeiou]|$)/g, '$1' )
  
  // 'X' transforms to 'S' if at the beginning.
  s = s.replace( /^x/, 's' )
  // Otherwise, 'X' transforms to 'KS'.
  s = s.replace( /x/g, 'ks' )
  
  // Drop 'Y' if not followed by a vowel.
  s = s.replace( /y([^aeiou]|$)/g, '$1' )
  
  // 'Z' transforms to 'S'.
  s = s.replace( /z/g, 's' )
  
  // Drop all vowels unless it is the beginning.
  s = s.charAt( 0 ) + s.substr( 1 ).replace( /[aeiou]/g, '' )
  
  return s.substr( 0, 32 )
  
}

module.exports = metaphone
