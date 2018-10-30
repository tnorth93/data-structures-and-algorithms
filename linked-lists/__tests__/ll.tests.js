'use strict';

const LinkedList = require('../index');

const emptyList = new LinkedList();
const pupulatedList = new LinkedList();
const ll1 = new LinkedList();
const ll2 = new LinkedList();

for (let i = 0; i < 10; i++) {
  pupulatedList.insertAtHead(`pup ${i}`);
}

for (let i = 3; i > 0; i--) {
  ll1.insertAtHead(i);
  ll2.insertAtHead(i + 10);
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

  describe('append method tests', () => {
    test('append check 1', () => {
      pupulatedList.append('pup zeta');
      expect(pupulatedList.head.next.next.next.next.next.next.next.next.next.next.next.value).toEqual('pup zeta');
    });
    test('append check 2', () => {
      expect(pupulatedList.append('pup teke')).toMatchObject({ next: null, value: 'pup teke' });
    });
    test('check if linked list is empty on remove', () => {
      expect(() => {
        emptyList.append('zeta pup');
      }).toThrow();
    });
  });

  describe('kth from end tests', () => {
    test('kth from end check 1', () => {
      expect(pupulatedList.kthFromEnd(2)).toEqual('pup 0');
    });
    test('throw an error if k is greater than the length of the list', () => {
      expect(() => {
        pupulatedList.kthFromEnd(13);
      }).toThrow();
    });
    test('throw an error if list is empty', () => {
      expect(() => {
        emptyList.kthFromEnd(3);
      }).toThrow();
    });
  });

  describe('merge two lists tests', () => {
    test('merge', () => {
      pupulatedList.merge(ll1, ll2);
      expect((ll1.head.value)).toEqual(1);
      expect((ll1.head.next.value)).toEqual(11);
    });
    test('throw an error if one of the lists is empty', () => {
      expect(() => {
        pupulatedList.merge(ll1, emptyList);
      }).toThrow();
    });
    test('throw an error if list is empty', () => {
      expect(() => {
        emptyList.remove('omega pup');
      }).toThrow();
    });
  });

  test('reverseHelper', () => {
    const one = new LinkedList();
    one.insertAtHead(0);
    one.append(1);
    one.append(2);
    one.append(3);
    one.append(4);
    expect(one.reverseLLHelper().head.value).toEqual(4);
    expect(one.head.next.next.next.next.value).toEqual(0);
  });

  test('reverseArray', () => {
    const two = new LinkedList();
    two.insertAtHead(0);
    two.append(1);
    two.append(2);
    two.append(3);
    two.append(4);
    expect(two.reverseLLArray().head.value).toEqual(4);
    expect(two.head.next.next.value).toEqual(2);
  });

  test('reverseHashmap', () => {
    const three = new LinkedList();
    three.insertAtHead(0);
    three.append(1);
    three.append(2);
    three.append(3);
    three.append(4);
    expect(three.reverseLLMap().head.value).toEqual(4);
    expect(three.head.next.next.value).toEqual(2);
  });
});
