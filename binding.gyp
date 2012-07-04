{
  'targets': [
    {
      'target_name': 'speech',
      'sources': [
        'src/speech.cpp'
      ],
      'conditions': [
        ['OS=="mac"', {
          'defines': [ '__MAC__' ]
        }],
        ['OS=="linux"', {
          'defines': [ '__LINUX__' ]
        }],
        ['OS=="win"', {
          'defines': [ '__WIN__' ]
        }]
      ]
    }
  ]
}