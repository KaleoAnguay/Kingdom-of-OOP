'use strict';

var Archaea =  require('./Archaea');

module.exports = class LivingThing  extends Archaea{
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    super();
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;

  }

  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Not a string!');
    }
    this._name = str;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(str) {
    if ( str === true || str === false) {
      this._uniCellular = str;
    } else {
      throw new TypeError('Please enter true or false statement!');
    }
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(str) {
    this._uniCellular = !str;
  }
};