'use strict';

const Graph = require('../graphs/graph');
const Vertex = require('../graphs/vertex');
const bfs = require('../graphs/bfs');

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);

describe('#parentchildtree.js', () => {
  test('return correct path', () => {
    console.log(graph._adjacencyList);
    expect(bfs(graph, ten, seven)).toEqual(undefined);
  });

  // test('return null', () => {
  //   expect(parentchildtree(valB, valA, binaryTreeOne)).toEqual(false);
  // });
  //
  // test('Tree is null, should return undefined', () => {
  //   expect(parentchildtree(valA, valB, binaryTreeTwo)[0]).toEqual(undefined);
  // });
});
