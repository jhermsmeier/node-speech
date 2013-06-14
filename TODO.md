
# TODO

### Phonetics

- DM SoundEx
- BM SoundEx
- NYSIIS
- Metaphone
- Double Metaphone

### Tokenizer

### TF-IDF (Term frequency - Inverse document frequency)

### POS Tagging

### Sentiment Detection

### Sentence Synthesization

### Language Detection

### Semantic Speech Parsing

The general idea is to detect the language used, parse the sentences into tokens, POS tag them and construct a semantic context.

```javascript
'Hello, my name is Jonas. I\'ll meet with Jonas tomorrow at 8 in the evening.'
```

```javascript
[{
  language: 'en',
  sentiment: 'neutral',
  tokens: [ 'Hello', ',', 'my', 'name', 'is', 'Jonas', '.' ],
  pos: [ 'UH', ',', 'PRP$', 'NN', 'VBZ', 'NNP', '.' ]
},{
  language: 'en',
  sentiment: 'neutral',
  tokens: [ 'I', '\'ll', 'meet', 'with', 'Jonas', 'tomorrow', 'at', '8', 'in', 'the', 'evening', '.' ],
  pos: [ 'PRP', 'MD', 'VB', 'IN', 'NNP', 'NN', 'IN', 'CD', 'IN', 'DT', 'NN', '.' ]
}]
```

