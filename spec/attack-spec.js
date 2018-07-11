const Attack = require('../attack');
const Hero = require('../hero');

describe("Attack", function() {

  let subject, defender;

  beforeEach(function() {
    defender = new Hero();
    spyOnProperty(defender, 'armorClass').and.returnValue(10);
    spyOn(defender, 'damage');
    subject = new Attack(defender);
  });

  describe("when roll is less than defender's armor class", function() {
    beforeEach(function() {
      subject.resolve(9);
    });
    it("misses", function() {
      subject.resolve(9);
      expect(subject.hit).toBe(false);
    });
    it("does no damage", function() {
      expect(defender.damage).not.toHaveBeenCalled();
    })
  });

  describe("when roll meets defender's armor class", function() {
    beforeEach(function() {
      subject.resolve(10);
    });

    it("hits", function() {
      expect(subject.hit).toBe(true);
    });
    it("does a point of damage", function() {
      expect(defender.damage).toHaveBeenCalledWith(1);
    })
  });

  describe("when roll beats defender's armor class", function() {
    beforeEach(function() {
      subject.resolve(11);
    });

    it("hits", function() {
      expect(subject.hit).toBe(true);
    });
    it("does a point of damage", function() {
      expect(defender.damage).toHaveBeenCalledWith(1);
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
      expect(defender.damage).toHaveBeenCalledWith(2);
    })
  });
});