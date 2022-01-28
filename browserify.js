ALLEX.execSuite.libRegistry.register('allex_svgtemplateslib', require('./libindex')(
  ALLEX,
  ALLEX.execSuite.libRegistry.get('allex_templateslitelib'),
  ALLEX.execSuite.libRegistry.get('allex_htmltemplateslib')
));