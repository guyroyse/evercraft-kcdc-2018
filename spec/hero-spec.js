const Hero = require('../hero');

describe("Hero", function() {

  let subject;

  beforeEach(function() {
    subject = new Hero();
  });

  describe("#name", function() {
    it("has a default value of empty string", function() {
      expect(subject.name).toBe("");
    });
    it("is mutable", function() {
      subject.name = "Barbarian Bob";
      expect(subject.name).toBe("Barbarian Bob");
    });
  });

  describe("#alignment", function() {
    it("has a default value of NEUTRAL", function() {
      expect(subject.alignment).toBe('NEUTRAL');
    });
    it("can be GOOD", function() {
      subject.alignment = 'GOOD';
      expect(subject.alignment).toBe('GOOD');
    });
    it("can be NEUTRAL", function() {
      subject.alignment = 'GOOD';
      subject.alignment = 'NEUTRAL';
      expect(subject.alignment).toBe('NEUTRAL');
    });
    it("can be EVIL", function() {
      subject.alignment = 'EVIL';
      expect(subject.alignment).toBe('EVIL');
    });
    it("cannot be invalid", function() {
      expect(() => subject.alignment = 'DORKY')
        .toThrow("Invalid alignment of 'DORKY'");
    });
  });

  describe("#armorClass", function() {
    it("has a default value of 10", function() {
      expect(subject.armorClass).toBe(10);
    });
    it("is modified by dexterity modifier", function() {
      subject.dexterity.score = 14;
      expect(subject.armorClass).toBe(12);
    });
  });

  describe("#hitPoints", function() {
    it("has a default value of 5", function() {
      expect(subject.hitPoints).toBe(5);
    });
    it("is modified by constitution modifier", function() {
      subject.constitution.score = 14;
      expect(subject.hitPoints).toBe(7);
    });
    it("cannot be modified below 1 by constitution", function() {
      subject.constitution.score = 1;
      expect(subject.hitPoints).toBe(1);
    });
    it("goes down when hero is damaged", function() {
      subject.damage(2);
      expect(subject.hitPoints).toBe(3);
    });
  });

  describe("#deadness", function() {
    it("is false when undamaged", function() {
      expect(subject.deadness).toBe(false);
    });
    it("is false when damaged", function() {
      subject.damage(2);
      expect(subject.deadness).toBe(false);
    });
    it("is true when damaged to 0", function() {
      subject.damage(5);
      expect(subject.deadness).toBe(true);
    });
    it("is true when damaged below 0", function() {
      subject.damage(5000);
      expect(subject.deadness).toBe(true);
    });
  });

  describe("#attackModifier", function() {
    it("has default value of 0", function() {
      expect(subject.attackModifier).toBe(0);
    });
    it("is modified by strength modifier", function() {
      subject.strength.score = 14
      expect(subject.attackModifier).toBe(2);
    });
  });
});
