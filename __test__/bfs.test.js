'use strict';

const Vertex = require('../graphs/vertex');
const Graph = require('../graphs/graph');
const bfs = require('../graphs/bfs');

const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const sleven = new Vertex(17);

graph.addVertex(sleven);
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

describe('#bfs.js', () => {
  test('return correct path', () => {
    bfs(graph, ten, seven);
    expect(bfs(graph, ten, seven)).toBeTruthy();
  });

  test('return null', () => {
    expect(bfs(graph, ten, sleven)).toBeFalsy();
  });

  test('return a correct path', () => {
    expect(bfs(graph, three, eight)).toBeTruthy();
  });
});
