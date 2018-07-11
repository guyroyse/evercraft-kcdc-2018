const Ability = require('../ability');

describe("Abilitiy", function() {

  let subject;

  beforeEach(function() {
    subject = new Ability();
  });

  describe("#score", function() {
    it("has a default value of 10", function() {
      expect(subject.score).toBe(10);
    });
    it("is mutable", function() {
      subject.score = 15;
      expect(subject.score).toBe(15);
    });
    it("cannot be more than 20", function() {
      subject.score = 20;
      expect(() => subject.score = 21)
        .toThrow("Score can be greater than 20");
    });
    it("cannot be less than 1", function() {
      subject.score = 1;
      expect(() => subject.score = 0)
        .toThrow("Score can be less than 1");
    });
  });

  describe("#modifier", function() {
    [
      {score: 1, modifier: -5},
      {score: 2, modifier: -4},
      {score: 3, modifier: -4},
      {score: 4, modifier: -3},
      {score: 5, modifier: -3},
      {score: 6, modifier: -2},
      {score: 7, modifier: -2},
      {score: 8, modifier: -1},
      {score: 9, modifier: -1},
      {score: 10, modifier: 0},
      {score: 11, modifier: 0},
      {score: 12, modifier: +1},
      {score: 13, modifier: +1},
      {score: 14, modifier: +2},
      {score: 15, modifier: +2},
      {score: 16, modifier: +3},
      {score: 17, modifier: +3},
      {score: 18, modifier: +4},
      {score: 19, modifier: +4},
      {score: 20, modifier: +5}
    ].forEach(value => {
      it(`has modifier of ${value.modifier} for score of ${value.score}`, function() {
        subject.score = value.score;
        expect(subject.modifier).toBe(value.modifier);
      });
    });
  });
});
