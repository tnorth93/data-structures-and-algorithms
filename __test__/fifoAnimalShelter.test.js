'use strict';

const AnimalShelter = require('../fifo_animal_shelter');
const ShelterAnimal = require('../fifo_animal_shelter');

// const betsy = new ShelterAnimal('dog');
// const kelsey = new ShelterAnimal('cat');
// const donald = new ShelterAnimal('cat');
// const tripp = new ShelterAnimal('cat');
const nero = new ShelterAnimal('cat');
// const goliath = new ShelterAnimal('dog');
const scout = new ShelterAnimal('dog');

const newShelter = new AnimalShelter();

describe('#fifo_animal_shelter.js', () => {
  test('enqueue with an object possessing property of cat should be passed into catArray', () => {
    newShelter.enqueue(nero);
    newShelter.dequeue('dog');
    expect(shelter.catArray[0].type).toEqual('cat');
  });

  test('enqueue with an object possessing property of dog should be passed into dogArray', () => {
    newShelter.enqueue(scout);
    newShelter.dequeue('dog');
    expect(shelter.catArray[0].type).toEqual('cat');
  });

  test('enqueue with an object possessing property of cat should be passed into Array', () => {
    shelter.enqueue(nero);
    shelter.dequeue('dog');
    expect(shelter.catArray[0].type).toEqual('cat');
  });
});
