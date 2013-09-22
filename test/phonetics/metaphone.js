
var assert = require( 'assert' )
var metaphone = require( '../../speech/phonetics/metaphone' )

module.exports = {
  
  Z: function() {
    assert.equal( metaphone( 'z' ), 's' )
    assert.equal( metaphone( 'zz' ), 's' )
  },
  
  Y: function() {
    assert.equal( metaphone( 'y' ), '' )
    assert.equal( metaphone( 'zy' ), 's' )
    assert.equal( metaphone( 'zyz' ), 'ss' )
    assert.equal( metaphone( 'zya' ), 'sy' )
  },
  
  X: function() {
    assert.equal( metaphone( 'x' ), 's' )
    assert.equal( metaphone( 'zx' ), 'sks' )
    assert.equal( metaphone( 'zxz' ), 'skss' )
  },
  
  W: function() {
    assert.equal( metaphone( 'w' ), '' )
    assert.equal( metaphone( 'zw' ), 's' )
    assert.equal( metaphone( 'zwz' ), 'ss' )
    assert.equal( metaphone( 'zwa' ), 'sw' )
  },

  V: function() {
    assert.equal( metaphone( 'v' ), 'f' )
    assert.equal( metaphone( 'zv' ), 'sf' )
    assert.equal( metaphone( 'zvz' ), 'sfs' )
  },
  
  U: function() {
    assert.equal( metaphone( 'u' ), 'u' )
    assert.equal( metaphone( 'zu' ), 's' )
  },
  
  T: function() {
    assert.equal( metaphone( 't' ), 't' )
    assert.equal( metaphone( 'ztiaz' ), 'sxs' )
    assert.equal( metaphone( 'ztioz' ), 'sxs' )
    assert.equal( metaphone( 'zthz' ), 's0s' )
    assert.equal( metaphone( 'ztchz' ), 'sxs' )
    assert.equal( metaphone( 'ztz' ), 'sts' )
  },
  
  S: function() {
    assert.equal( metaphone( 's' ), 's' )
    assert.equal( metaphone( 'zshz' ), 'sxs' )
    assert.equal( metaphone( 'zsioz' ), 'sxs' )
    assert.equal( metaphone( 'zsiaz' ), 'sxs' )
    assert.equal( metaphone( 'zs' ), 'ss' )
    assert.equal( metaphone( 'zsz' ), 'sss' )
  },
  
  R: function() {
    assert.equal( metaphone( 'r' ), 'r' )
    assert.equal( metaphone( 'zr' ), 'sr' )
    assert.equal( metaphone( 'zrz' ), 'srs' )
  },
  
  Q: function() {
    assert.equal( metaphone( 'q' ), 'k' )
    assert.equal( metaphone( 'zq' ), 'sk' )
    assert.equal( metaphone( 'zqz' ), 'sks' )
  },
  
  P: function() {
    assert.equal( metaphone( 'p' ), 'p' )
    assert.equal( metaphone( 'zp' ), 'sp' )
    assert.equal( metaphone( 'zph' ), 'sf' )
    assert.equal( metaphone( 'zpz' ), 'sps' )
  },
  
  O: function() {
    assert.equal( metaphone( 'o' ), 'o' )
    assert.equal( metaphone( 'zo' ), 's' )
  },
  
  N: function() {
    assert.equal( metaphone( 'n' ), 'n' )
    assert.equal( metaphone( 'zn' ), 'sn' )
    assert.equal( metaphone( 'znz' ), 'sns' )
  },
  
  M: function() {
    assert.equal( metaphone( 'm' ), 'm' )
    assert.equal( metaphone( 'zm' ), 'sm' )
    assert.equal( metaphone( 'zmz' ), 'sms' )
  },
  
  L: function() {
    assert.equal( metaphone( 'l' ), 'l' )
    assert.equal( metaphone( 'zl' ), 'sl' )
    assert.equal( metaphone( 'zlz' ), 'sls' )
  },
  
  K: function() {
    assert.equal( metaphone( 'k' ), 'k' )
    assert.equal( metaphone( 'zk' ), 'sk' )
    assert.equal( metaphone( 'zck' ), 'sk' )
  },
  
  J: function() {
    assert.equal( metaphone( 'j' ), 'j' )
    assert.equal( metaphone( 'zj' ), 'sj' )
    assert.equal( metaphone( 'zjz' ), 'sjs' )
  },
  
  I: function() {
    assert.equal( metaphone( 'i' ), 'i' )
    assert.equal( metaphone( 'zi' ), 's' )
  },
  
  H: function() {
    assert.equal( metaphone( 'h' ), 'h' )
    assert.equal( metaphone( 'zh' ), 'sh' )
    assert.equal( metaphone( 'zah' ), 's' )
    assert.equal( metaphone( 'zchh' ), 'sx' )
    assert.equal( metaphone( 'ha' ), 'h' )
  },
  
  G: function() {
    assert.equal( metaphone( 'g' ), 'k' )
    assert.equal( metaphone( 'zg' ), 'sk' )
    assert.equal( metaphone( 'zgh' ), 'skh' )
    assert.equal( metaphone( 'zghz' ), 'shs' )
    assert.equal( metaphone( 'zgha' ), 'sh' )
    assert.equal( metaphone( 'zgn' ), 'sn' )
    assert.equal( metaphone( 'zgns' ), 'skns' )
    assert.equal( metaphone( 'zgned' ), 'snt' )
    assert.equal( metaphone( 'zgneds' ), 'sknts' )
    assert.equal( metaphone( 'zgi' ), 'sj' )
    assert.equal( metaphone( 'zgiz' ), 'sjs' )
    assert.equal( metaphone( 'zge' ), 'sj' )
    assert.equal( metaphone( 'zgez' ), 'sjs' )
    assert.equal( metaphone( 'zgy' ), 'sj' )
    assert.equal( metaphone( 'zgyz' ), 'sjs' )
    assert.equal( metaphone( 'zgz' ), 'sks' )
  },
  
  F: function() {
    assert.equal( metaphone( 'f' ), 'f' )
    assert.equal( metaphone( 'zf' ), 'sf' )
    assert.equal( metaphone( 'zfz' ), 'sfs' )
  },
  
  E: function() {
    assert.equal( metaphone( 'e' ), 'e' )
    assert.equal( metaphone( 'ze' ), 's' )
  },
  
  D: function() {
    assert.equal( metaphone( 'd' ), 't' )
    assert.equal( metaphone( 'fudge' ), 'fjj' )
    assert.equal( metaphone( 'dodgy' ), 'tjj' )
    assert.equal( metaphone( 'dodgi' ), 'tjj' )
    assert.equal( metaphone( 'zd' ), 'st' )
    assert.equal( metaphone( 'zdz' ), 'sts' )
  },
  
  C: function() {
    assert.equal( metaphone( 'c' ), 'k' )
    assert.equal( metaphone( 'zcia' ), 'sx' )
    assert.equal( metaphone( 'zciaz' ), 'sxs' )
    assert.equal( metaphone( 'zch' ), 'sx' )
    assert.equal( metaphone( 'zchz' ), 'sxs' )
    assert.equal( metaphone( 'zci' ), 'ss' )
    assert.equal( metaphone( 'zciz' ), 'sss' )
    assert.equal( metaphone( 'zce' ), 'ss' )
    assert.equal( metaphone( 'zcez' ), 'sss' )
    assert.equal( metaphone( 'zcy' ), 'ss' )
    assert.equal( metaphone( 'zcyz' ), 'sss' )
    assert.equal( metaphone( 'zsci' ), 'ss' )
    assert.equal( metaphone( 'zsciz' ), 'sss' )
    assert.equal( metaphone( 'zsce' ), 'ss' )
    assert.equal( metaphone( 'zscez' ), 'sss' )
    assert.equal( metaphone( 'zscy' ), 'ss' )
    assert.equal( metaphone( 'zscyz' ), 'sss' )
    assert.equal( metaphone( 'zsch' ), 'sskh' )
    assert.equal( metaphone( 'zc' ), 'sk' )
    assert.equal( metaphone( 'zcz' ), 'sks' )
  },
  
  B: function() {
    assert.equal( metaphone( 'b' ), 'b' )
    assert.equal( metaphone( 'zb' ), 'sb' )
    assert.equal( metaphone( 'zbz' ), 'sbs' )
    assert.equal( metaphone( 'zmb' ), 'sm' )
  },
  
  A: function() {
    assert.equal( metaphone( 'a' ), 'a' )
    assert.equal( metaphone( 'za' ), 's' )
  },
  
  Misc: function() {
    assert.equal( metaphone( 'dumb' ), 'tm' )
    assert.equal( metaphone( 'smith' ), 'sm0' )
    assert.equal( metaphone( 'school' ), 'skhl' )
    assert.equal( metaphone( 'merci' ), 'mrs' )
    assert.equal( metaphone( 'cool' ), 'kl' )
    assert.equal( metaphone( 'aebersold' ), 'ebrslt' )
    assert.equal( metaphone( 'gnagy' ), 'nj' )
    assert.equal( metaphone( 'knuth' ), 'n0' )
    assert.equal( metaphone( 'pniewski' ), 'nsk' )
    assert.equal( metaphone( 'wright' ), 'rht' )
    assert.equal( metaphone( 'phone' ), 'fn' )
    assert.equal( metaphone( 'aggregate' ), 'akrkt' )
    assert.equal( metaphone( 'accuracy' ), 'akkrs' )
    assert.equal( metaphone( 'encyclopedia' ), 'ensklpt' )
    assert.equal( metaphone( 'honorificabilitudinitatibus' ), 'hnrfkblttnttbs' )
    assert.equal( metaphone( 'antidisestablishmentarianism' ), 'anttsstblxmntrnsm' )
  },

}
