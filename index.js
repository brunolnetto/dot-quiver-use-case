// [START app]
import express from 'express'
import { createRequire } from "module";
import fs from 'fs'

import Graph from '@brunolnetto/node-link/src/data-structures/graph/Graph.js'
import GraphVertex from '@brunolnetto/node-link/src/data-structures/graph/GraphVertex.js'
import GraphEdge from '@brunolnetto/node-link/src/data-structures/graph/GraphEdge.js'
import { parseBlueprintToGraph } from '@brunolnetto/node-link/src/utils/workflow/parsers.js'

const require = createRequire(import.meta.url);
const app = express();

// [START enable_parser]
// This middleware is available in Express v4.16.0 onwards
app.use(express.json({extended: true}));
// [END enable_parser]

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

app.get('/', (req, res) => {
  // Driver program
  // Create a sample graph
  
    
  // A directed graph
  let graph_ = new Graph(true);

  // Nodes
  let A = new GraphVertex('A');
  let B = new GraphVertex('B');
  let C = new GraphVertex('C');
  let D = new GraphVertex('D');
  let E = new GraphVertex('E');
  let F = new GraphVertex('F');

  // Vertices
  let AB = new GraphEdge(A, B);
  let BC = new GraphEdge(B, C);
  let CD = new GraphEdge(C, D);
  let CE = new GraphEdge(C, E);
  let EB = new GraphEdge(E, B);
  let CF = new GraphEdge(C, F);
  let FB = new GraphEdge(F, B);

  // Add edges
  graph_.addEdges([AB, BC, CD, CE, EB, CF, FB]);

  res.send(graph_.describe());
  
});
// [END app]
