class Hero {
  constructor() {
    this.name = '';
    this._alignment = 'NEUTRAL';
    this._armorClass = 10;
    this.hitPoints = 5;
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
    return this._armorClass;
  }

  get deadness() {
    return this.hitPoints <= 0;
  }

  damage(points) {
    this.hitPoints -= points;
  }
}

module.exports = Hero;