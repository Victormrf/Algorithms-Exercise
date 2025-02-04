const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[], // every time we successfuly visit a spot, we add it in the pre condition, and remove it in the post condition
): boolean {
    // Base case: requires us to know where we are currently at
    // 1. off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }
    // 2. on the wall
    if (maze[curr.y][curr.x] === wall) {
        path.push(end);
        return false;
    }
    // 3. on the end
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }
    // 4. if we have seen it
    if (seen[curr.y][curr.x]) {
        return false;
    }
    // Recursive case: requires us to be able to walk in directions
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[i].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
