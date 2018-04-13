class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {

    let currentVamp = this;
    let years = 0;
    while(currentVamp.creator){
      currentVamp = currentVamp.creator;
      years++;
    }
    return years;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.numberOfVampiresFromOriginal <= vampire.numberOfVampiresFromOriginal){
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.


  closestCommonAncestor(vampire) {

//come back to this!!!!!


    let youngVamp = this; //always needs to be the youngest
    let oldestVamp = vampire; //always needs to be the oldest
    while(youngVamp.creator){
      while(oldestVamp.creator){
        if(youngVamp.creator === oldestVamp.creator){
          return oldestVamp.creator.name;
        } else {
          youngVamp = youngVamp.creator;
        }
      }
    }
  }


}

const ov = new Vampire("Drake-ula", "6");
const ansel = new Vampire("Ansel", "1920");
const bart = new Vampire("Bart", "1921");
const elgort = new Vampire("Elgort", "1925");
const sarah = new Vampire("Sarah", "1932");
const andrew = new Vampire("Andrew", "1934");

ov.addOffspring(ansel);
ov.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);

// console.log(elgort.creator);
// console.log(elgort.isMoreSeniorThan(ansel));
// console.log(elgort.isMoreSeniorThan(andrew));
// console.log(andrew.numberOfVampiresFromOriginal);
// console.log(ov.numberOfOffspring);
console.log(andrew.closestCommonAncestor(sarah));
console.log(elgort.closestCommonAncestor(sarah));
console.log(elgort.closestCommonAncestor(bart));
console.log(andrew.closestCommonAncestor(ansel)); //Issues.



module.exports = Vampire;

