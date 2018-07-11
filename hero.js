const Ability = require('./ability');

class Hero {
  constructor() {
    this._name = '';
    this._alignment = 'NEUTRAL';
    this._damage = 0;

    this.strength = new Ability();
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

  get maxHitPoints() {
    return Math.max(5 + this.constitution.modifier, 1);
  }

  get hitPoints() {
    return this.maxHitPoints - this._damage;
  }

  get deadness() {
    return this.hitPoints <= 0;
  }

  get attackModifier() {
    return this.strength.modifier;
  }

  get attackDamage() {
    return Math.max(1, 1 + this.strength.modifier);
  }

  get criticalDamage() {
    return Math.max(1, 2 + this.strength.modifier * 2);
  }

  damage(points) {
    this._damage += points;
  }
}

module.exports = Hero;