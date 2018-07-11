class Attack {
  constructor(attacker, defender) {
    this.attacker = attacker;
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
    return roll + this.attacker.attackModifier >=
      this.defender.armorClass;
  }

  calculateDamage(roll) {
    return roll === 20 ?
      this.attacker.criticalDamage :
      this.attacker.attackDamage;
  }
}

module.exports = Attack;