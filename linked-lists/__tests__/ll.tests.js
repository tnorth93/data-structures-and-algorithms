'use strict';

const LinkedList = require('../index');

const emptyList = new LinkedList();
const pupulatedList = new LinkedList();

for (let i = 0; i < 10; i++) {
  pupulatedList.insertAtHead(`pup ${i}`);
}

describe('#index.js', () => {
  describe('added tests', () => {
    test('check if node was added', () => {
      pupulatedList.insertAtHead('omega pup');
      expect(pupulatedList.head.value).toEqual('omega pup');
    });
    test('check if linked list is empty on add', () => {
      pupulatedList.insertAtHead('alpha pup');
      expect(pupulatedList.head.next.value).toEqual('omega pup');
    });
  });

  describe('find/empty tests', () => {
    test('find/empty tests', () => {
      pupulatedList.find('omega pup');
      expect(pupulatedList.head.next.next.next.value).toEqual('pup 8');
    });
    test('check if linked list is empty on find', () => {
      expect(() => {
        emptyList.find('omega pup');
      }).toThrow();
    });
  });

  describe('remove/empty tests', () => {
    test('remove test', () => {
      pupulatedList.remove('pup 9');
      expect(pupulatedList.head.next.next.value).toEqual('pup 8');
    });
    test('check if linked list is empty on remove', () => {
      expect(() => {
        emptyList.remove('omega pup');
      }).toThrow();
    });
  });
});
