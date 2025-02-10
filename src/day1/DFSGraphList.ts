function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    // base case
    if (seen[curr]) {
        return false;
    }

    seen[curr] = true;

    // recursion
    // pre
    path.push(curr); // we are visiting this node
    if (curr === needle) {
        return true;
    }

    // recurse
    const list = graph[curr]; // first thing we need is the list of edges (where the node is going to and the weight associated to every edge)
    for (let i = 0; i < list.length; ++i) {
        const edge = list[i];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true; // that way we can send the signal back up the recursive stack, so that each place pops
        }
    }

    // post
    path.pop(); // we are done with this node (we need to pop it off the stack)

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path);

    if (path.length === 0) {
        return null;
    }

    return path;
}
