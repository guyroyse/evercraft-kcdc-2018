class Ability {
  constructor() {
    this._score = 10;
  }

  get score() {
    return this._score;
  }

  set score(score) {
    if (score < 1) throw "Score can be less than 1";
    if (score > 20) throw "Score can be greater than 20";
    this._score = score;
  }

  get modifier() {
    return Math.floor((this.score - 10) / 2);
  }
}

module.exports = Ability;