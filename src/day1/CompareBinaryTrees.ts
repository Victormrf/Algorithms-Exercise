export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // Base case
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a === null || b === null) {
        return true;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
