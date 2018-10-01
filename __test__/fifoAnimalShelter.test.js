'use strict';

const Animal = require('../animal');
const AnimalShelter = require('../fifo_animal_shelter');

const nero = new Animal('cat');
const scout = new Animal('dog');

const newShelter = new AnimalShelter();

describe('#fifo_animal_shelter.js', () => {
  test('enqueue with an object possessing property of cat should be passed into catArray', () => {
    newShelter.enqueue(nero);
    newShelter.enqueue(scout);
    expect(newShelter.catArray[0].type).toEqual('cat');
  });

  test('enqueue with an object possessing property of dog should be passed into dogArray', () => {
    newShelter.enqueue(scout);
    expect(newShelter.dogArray[0].type).toEqual('dog');
  });

  test('enqueue with an object possessing property of cat should be passed into Array', () => {
    newShelter.enqueue(nero);
    newShelter.enqueue(scout);
    expect(newShelter.dequeue('cat').type).toEqual('cat');
  });
});
