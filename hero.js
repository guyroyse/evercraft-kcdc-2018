const Ability = require('./ability');

class Hero {
  constructor() {
    this._name = '';
    this._alignment = 'NEUTRAL';
    this._damage = 0;

    this.dexterity = new Ability();
    this.constitution = new Ability();
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get alignment() {
    return this._alignment;
  }

  set alignment(alignment) {
    if (['GOOD', 'NEUTRAL', 'EVIL'].includes(alignment)) {
      this._alignment = alignment;
    } else {
      throw `Invalid alignment of '${alignment}'`;
    }
  }

  get armorClass() {
    return 10 + this.dexterity.modifier;
  }

  get hitPoints() {
    return 5 + this.constitution.modifier - this._damage;
  }

  get deadness() {
    return this.hitPoints <= 0;
  }

  damage(points) {
    this._damage += points;
  }
}

module.exports = Hero;