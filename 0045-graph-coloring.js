
function GraphNode(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
}

var a = new GraphNode("Mexico");
var b = new GraphNode("USA");
var c = new GraphNode("Canada");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];
// console.log(graph);



function colorGraph(graph) {

  const colors = new Set();
  for (let i = 0; i <= graph.length; i++) {
    colors.add(i);
  }
  
  for (let i = 0; i < graph.length; i++) {
    if (graph[i].color !== null) {
      continue;
    }
    
    
    let taken = new Set();
    let neighbors = graph[i].neighbors.values();
    
    // get colors of neighbors, save in taken
    for (let j = 0; j < graph[i].neighbors.size; j++) {
      let neighbor = neighbors.next().value;
      
      if (taken.has(neighbor.color)) {
        throw Error('Illegal coloring found');
      }
      
      taken.add(neighbor.color);
    }
    
    // color things
    for (let j = 0; j < taken.size; j++) {
      if (!taken.has(j)) {
        graph[i].color = j;
        break;
      }
    }
    

  }
  
  return graph;
}

colorGraph(graph);
