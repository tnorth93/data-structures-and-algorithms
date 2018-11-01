'use strict';

const Queue = require('queue-fifo'); //eslint-disable-line

module.exports = function bfs(graph, start, target) {
  const queue = new Queue();
  const visitedVertices = new Set();
  const path = new Map();
  queue.enqueue(start);
  visitedVertices.add(start);
  while (queue.size() > 0) {
    const currentVertex = queue.dequeue();
    if (currentVertex === target) {
      return path;
    }
    const neighbors = graph.getNeighbors(currentVertex);
    for (let neighbor of neighbors) { //eslint-disable-line
      const neighborVertex = neighbor.vertex;
      if (visitedVertices.has(neighborVertex)) {
        continue; //eslint-disable-line
      } else {
        visitedVertices.add(neighborVertex);
      }
      path.set(neighborVertex, currentVertex);
      queue.enqueue(neighborVertex);
    }
  }
  return null;
};
