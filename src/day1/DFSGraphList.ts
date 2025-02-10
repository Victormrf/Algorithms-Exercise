function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    // base case
    if (curr === needle) {
        return true;
    }

    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    // recursion
    // pre
    path.push(curr); // we are visiting this node

    // recurse
    const list = graph[curr]; // first thing we need is the list of edges (where the node is going to and the weight associated to every edge)

    // post
    path.pop(); // we are done with this node (we need to pop it off the stack)
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {}
