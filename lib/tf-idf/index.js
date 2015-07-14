
/**
 * [TfIdf description]
 * @param {Array} documents
 * @param {String} language
 */
function TfIdf( documents, language ) {
  
  if( !(this instanceof TfIdf) ) {
    return new TfIdf( documents, language )
  }
  
  this.language = language || 'en'
  this.documents = this.map( documents )
  
}

/**
 * [prototype description]
 * @type {Object}
 */
TfIdf.prototype = {
  
  /**
   * [idf description]
   * @param  {String} term
   * @return {Number} 
   */
  idf: function( term ) {
    
    var document_count
    var appearances = 1
    
    for( key in this.documents ) {
      this.documents[ key ][ term ]
        ? appearances++ : 0
    }
    
    document_count = Object.keys( this.documents )
    document_count = document_count.length + 1
    
    return Math.log( document_count / appearances )
    
  },
  
  /**
   * [run description]
   * @param  {String|Array} terms
   * @return {Object} 
   */
  run: function( terms ) {
    
    var key, document
    var result = Object.create( null )
    var self = this
    
    terms = ( terms + '' ).toLowerCase()
    terms = terms.split( /\W+/ )
    
    for( key in this.documents ) {
      
      document = this.documents[ key ]
      
      result[ key ] = terms.reduce(
        function ( value, term ) {
          return value + (
            ( document[ term ] || 0 ) * self.idf( term )
          )
        },
        0.0
      )
      
    }
    
    return result
    
  },
  
  /**
   * [map description]
   * @param  {Object|Array} documents
   * @return {Object} 
   */
  map: function( documents ) {
    
    var key, document
    var fillwords = new Array( 0 )
    
    if( this.language && this.language.fillwords ) {
      fillwords = this.language.fillwords
    }
    
    for( key in documents ) {
      
      document = ( documents[ key ] + '' )
      document = document.toLowerCase()
      document = document.split( /\W+/ )
      
      documents[ key ] = document.reduce(
        function ( document, word ) {
          if( !~fillwords.indexOf( word ) && word !== '' ) {
            document[ word ] = ( document[ word ] ? document[ word ] + 1 : 1 )
          }
          return document
        },
        Object.create( null )
      )
      
    }
    
    return documents
    
  },
  
  /**
   * [add description]
   * @param {Object|Array} documents
   */
  add: function( documents ) {
    
    documents = this.map( documents )
    
    for( var key in documents ) {
      this.documents[ key ] = documents[ key ]
    }
    
  }
  
}

module.exports = TfIdf
