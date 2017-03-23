'use strict';

var LivingThing = require('./LivingThing');

module.exports = class Eukaryota extends LivingThing {

  constructor(name,uniCellular,asexual,mobile,heterotoph) {
    super(name,uniCellular,true,false,asexual,mobile,heterotoph);

    this._heterotroph = heterotoph;

  }
};