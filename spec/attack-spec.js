const Attack = require('../attack');
const Hero = require('../hero');

describe("Attack", function() {

  let subject, attacker, defender;

  beforeEach(function() {
    defender = new Hero();
    spyOnProperty(defender, 'armorClass', 'get')
      .and.returnValue(10);
    spyOn(defender, 'damage');

    attacker = new Hero();
    spyOnProperty(attacker, 'attackModifier', 'get')
      .and.returnValue(2);
    spyOnProperty(attacker, 'attackDamage', 'get')
      .and.returnValue(3);
    spyOnProperty(attacker, 'criticalDamage', 'get')
      .and.returnValue(7);

    subject = new Attack(attacker, defender);
  });

  describe("when roll plus attack modifier is less than defender's armor class", function() {
    beforeEach(function() {
      subject.resolve(7);
    });
    it("misses", function() {
      expect(subject.hit).toBe(false);
    });
    it("does no damage", function() {
      expect(defender.damage).not.toHaveBeenCalled();
    })
  });

  describe("when roll meets defender's armor class", function() {
    beforeEach(function() {
      subject.resolve(8);
    });

    it("hits", function() {
      expect(subject.hit).toBe(true);
    });
    it("does a point of damage", function() {
      expect(defender.damage).toHaveBeenCalledWith(3);
    })
  });

  describe("when roll beats defender's armor class", function() {
    beforeEach(function() {
      subject.resolve(9);
    });

    it("hits", function() {
      expect(subject.hit).toBe(true);
    });
    it("does a point of damage", function() {
      expect(defender.damage).toHaveBeenCalledWith(3);
    })
  });

  describe("when roll is a natural 20", function() {
    beforeEach(function() {
      subject.resolve(20);
    });

    it("hits", function() {
      expect(subject.hit).toBe(true);
    });
    it("does double damage", function() {
      expect(defender.damage).toHaveBeenCalledWith(7);
    })
  });
});