class Attack {
  constructor(defender) {
    this.defender = defender;
  }

  resolve(roll) {
    this.hit = roll >= this.defender.armorClass;
  }
}

module.exports = Attack;