'use strict';

const Vertex = require('./vertex');
const Graph = require('./graph');

const graphene = new Graph();

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
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);

module.exports = function bfs(graph, start, target) {
  const queue = [];
  const set = new Set();
  const path = new Map();
  queue.push(start);
  set.add(start);
  while (queue.length > 0) {
    const currentVertex = queue.unshift();
    if (currentVertex === target) {
      return path;
    }
    const neighbors = graphene.getNeighbors(currentVertex);
    for (let neighbor of neighbors) {
      const neighborVertex = neighbor.vertex;
      if (set.has(neighborVertex)) {
        continue;
      } else {
        set.add(neighborVertex);
      }
      path.set(neighborVertex, currentVertex);
      queue.push(neighborVertex);
    }
  }
  return null;
};
