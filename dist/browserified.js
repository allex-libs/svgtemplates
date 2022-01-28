(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ALLEX.execSuite.libRegistry.register('allex_svgtemplateslib', require('./libindex')(
  ALLEX,
  ALLEX.execSuite.libRegistry.get('allex_templateslitelib'),
  ALLEX.execSuite.libRegistry.get('allex_htmltemplateslib')
));
},{"./libindex":2}],2:[function(require,module,exports){
function createLib (execlib, templatelib, m) {
  'use strict';
  var i = templatelib.inherit,
    o = templatelib.override;

  var sizeablemarkup = i(m.element,
    {
      prereplacements: [{
        ATTRS: 'width="WIDTH" height="HEIGHT" focusable="FOCUSABLE" ATTRS'
      }],
      replacements: {
        FOCUSABLE: false,
        WIDTH: "100%",
        HEIGHT: "100%"
      }
    }
  );


  var svgmarkup = i(sizeablemarkup,
    {
      prereplacements: [{
        TYPE: 'svg',
        ATTRS: 'xmlns="http://www.w3.org/2000/svg" ATTRS'
      }]
    }
  );

  
  var shapemarkup = i(sizeablemarkup,
    {
      prereplacements: [{
        ATTRS: 'fill="FILL" stroke="STROKE" stroke-width="STROKEWIDTH" ATTRS'
      }],
      replacements: {
        FILL: '#000',
        STROKE: '#000',
        STROKEWIDTH: 0
      }
    }
  );

  var rectmarkup = i(shapemarkup,
    {
      prereplacements: [{
        TYPE: 'rect'
      }]
    }
  );
  return {
    sizeable: sizeablemarkup,
    svg: svgmarkup,
    shape: shapemarkup,
    rect: rectmarkup
  };
}
module.exports = createLib;
},{}]},{},[1]);
