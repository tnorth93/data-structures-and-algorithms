'use strict';


let age = 0;

function ShelterAnimal(type) {
  this.type = type;
  this.age = age;
}

class AnimalShelter {
  constructor() {
    this.catArray = [];
    this.dogArray = [];
    this.age = 0;
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      this.catArray.push(animal);
      age += 1;
    } else {
      this.dogArray.push(animal);
      age += 1;
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      this.catArray.shift();
    }
    if (pref === 'dog') {
      this.dogArray.shift();
    }
    if (this.catArray[0].age < this.dogArray[0].age) {
      this.catArray.shift();
    } else {
      this.dogArray.shift();
    }
  }
}

module.exports = AnimalShelter;
module.exports = ShelterAnimal;
