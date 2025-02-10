function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

// we want oto return the index that represents the lowest unvisited node
function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) {
            continue;
        }

        // we walk through every single one of this and return the lowest
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen: boolean[] = new Array(arr.length).fill(false);
    const prev: number[] = new Array(arr.length).fill(-1);
    const dists: number[] = new Array(arr.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const curr = getLowestUnvisited(seen, dists);
        seen[curr] = true;

        const adjs = arr[curr]; // list of our edges
        // now we need to go through every single edge
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i]; // we grab out the edge
            if (seen[edge.to]) {
                // we have seen this edge
                continue;
            }

            const dist = dists[curr] + edge.weight; // distance to this node, from the node we where at
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                prev[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = sink; // where we want to go to

    while (prev[curr] !== -1) {
        out.push(curr); // push it into our path
        curr = prev[curr]; // update our curr to the parent that got us to this point
    }

    out.push(source);
    return out.reverse();
}
