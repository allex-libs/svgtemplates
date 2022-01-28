function createLib (execlib) {
  execlib.loadDependencies('client', ['allex:templateslite:lib', 'allex:htmltemplates:lib'], require('./libindex').bind(null, execlib));                                                                               }

module.exports = createLib;