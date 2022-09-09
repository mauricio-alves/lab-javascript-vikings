// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    // added return
    return;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  // constructor e super opcionais

  // constructor(health, strength) {
  //   super(health, strength);
  // }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    // still don't get this shit
    // Saxon.receiveDamage(Viking.strength);
    // if (Saxon.health === 0) {
    //   this.saxonArmy.slice(Saxon, Saxon + 1);
    // }
    // return Saxon.receiveDamage(Viking.strength);
  }

  saxonAttack() {
    // still don't get this shit
  }

  showStatus() {
    // added solution
    if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    }
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}

const war = new War();

war.addViking(new Viking('Ragnar', 4, 5));
war.addSaxon(new Saxon(2, 4));

console.log(war.showStatus());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
