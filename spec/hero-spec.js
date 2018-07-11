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
  });

  describe("#hitPoints", function() {
    it("has a default value of 5", function() {
      expect(subject.hitPoints).toBe(5);
    });
  });
});