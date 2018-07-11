const Attack = require('../attack');

describe("Attack", function() {

  let subject, attacker, defender;

  beforeEach(function() {
    defender = { armorClass: 10 };
    subject = new Attack(defender);
  });

  it("hits when roll beats defender's armor class", function() {
    subject.resolve(11);
    expect(subject.hit).toBe(true);
  });
  it("hits when roll meets defender's armor class", function() {
    subject.resolve(10);
    expect(subject.hit).toBe(true);
  });
  it("misses when roll is less than defender's armor class", function() {
    subject.resolve(9);
    expect(subject.hit).toBe(false);
  });
});