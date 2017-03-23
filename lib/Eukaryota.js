'use strict';

var LivingThing = require('./LivingThing');

module.exports = class Eukaryota extends LivingThing {

  constructor(name,uniCellular,asexual,mobile,heterotroph) {
    super(name,uniCellular,true,false,asexual,mobile,heterotroph);

    this._heterotroph = heterotroph;

  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(str) {
    this._heterotroph = str;
  }

  get autotroph() {
    return !this._heterotroph;
  }

  set autotroph(str) {
    this._heterotroph = !str;
  }
};