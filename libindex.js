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