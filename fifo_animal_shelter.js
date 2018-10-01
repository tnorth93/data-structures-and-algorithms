'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.catArray = [];
    this.dogArray = [];
    this.age = 0;
  }

  enqueue(animal) {
    if (animal.type === 'cat') {
      animal.age = this.age;
      this.catArray.push(animal);
      this.age += 1;
    } else {
      animal.age = this.age;
      this.dogArray.push(animal);
      this.age += 1;
    }
  }

  dequeue(pref) {
    if (pref === 'cat') {
      return this.catArray.shift();
    }
    if (pref === 'dog') {
      return this.dogArray.shift();
    }
    if (this.catArray.age === undefined || this.dogArray.age === undefined) {
      return this.catArray.shift();
    }
    if (this.catArray[0].age > this.dogArray[0].age) {
      return this.catArray.shift();
    }
    return this.catArray.shift();
  }
};
