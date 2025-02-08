export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false); // our length is a square bcuz its an adjacency matrix
    const prev = new Array(graph.length).fill(-1);

    // we see our first node
    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number; // as shift could be undefined
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; ++i) {
            // anything we select, we grab out the row, which represents the edges (connections with other nodes)
            if (adjs[i] === 0) {
                continue;
            }
            if (seen[i]) {
                continue;
            }
            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }

    // build it backwards
    // we walk our previouses until we get to a -1
    let curr = needle;
    const out: number[] = []; // our path though the graph, starting from the needle to the source

    // keep on doing this until we found a point that has no more parent
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]; // whoever added me to the search, set it to that
    }

    return [source].concat(out.reverse());
}
