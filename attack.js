class Attack {
  constructor(defender) {
    this.defender = defender;
  }

  resolve(roll) {
    this.hit = this.isHit(roll);
    if (this.hit) {
      let points = this.calculateDamage(roll);
      this.defender.damage(points);
    }
  }

  isHit(roll) {
    return roll >= this.defender.armorClass;
  }

  calculateDamage(roll) {
    return roll === 20 ? 2 : 1;
  }
}

module.exports = Attack;