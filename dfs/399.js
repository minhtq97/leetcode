/**
 * Evaluate Division
 * 
 * This function builds a graph from the given equations and values, then uses DFS to answer each query.
 *
 * - Each variable is a node in the graph.
 * - Each equation a / b = value is represented as an edge from a to b with weight value, and from b to a with weight 1/value.
 * - For each query, we use DFS to find a path from the numerator to the denominator, multiplying the edge weights along the way.
 * - If a path exists, we return the product; otherwise, we return -1.0.
 */
var calcEquation = function (equations, values, queries) {
    // Create a graph where each variable is a node, and each equation is a weighted edge
    let graph = new Map();
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i]; // Get the variables for this equation
        let value = values[i];     // Get the value for this equation
        if (!graph.has(a)) {
            graph.set(a, new Map()); // Add node a if it doesn't exist
        }
        if (!graph.has(b)) {
            graph.set(b, new Map()); // Add node b if it doesn't exist
        }
        graph.get(a).set(b, value);     // Add edge a -> b with weight value
        graph.get(b).set(a, 1 / value); // Add edge b -> a with weight 1/value
    }

    // Helper function: DFS to find the value of a / b
    function dfs(a, b, graph, visited) {
        if (a === b) return 1.0;           // If both variables are the same, return 1.0
        if (visited.has(a)) return -1.0;   // Avoid cycles
        visited.add(a);                    // Mark current node as visited
        for (const [neighbor, value] of graph.get(a)) { // Explore neighbors
            let result = dfs(neighbor, b, graph, visited); // Recursive DFS
            if (result !== -1.0) return result * value;    // If path found, multiply and return
        }
        return -1.0; // No path found
    }

    let result = [];
    // For each query, check if both variables exist in the graph
    for (const [a, b] of queries) {
        if (!graph.has(a) || !graph.has(b)) {
            result.push(-1.0); // Unknown variable
        } else {
            result.push(dfs(a, b, graph, new Set())); // Compute value using DFS
        }
    }
    return result; // Return all results
};

// Example test cases
console.log(calcEquation([['a', 'b'], ['b', 'c']], [2.0, 3.0], [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]));
console.log(calcEquation([['a', 'b'], ['c', 'd']], [1.0, 1.0], [['a', 'c'], ['b', 'd'], ['b', 'a'], ['d', 'c']]));