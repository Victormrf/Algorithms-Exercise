export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [head]; //queue of

    while (q.length) {
        const curr = q.shift() as BinaryNode<number>;

        // search
        if (curr?.value === needle) {
            return true;
        }

        // if not found we keep traverseling
        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }

    return false;
}
