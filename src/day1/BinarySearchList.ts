export default function bs_list(haystack: number[], needle: number): boolean {
    let min = 0;
    let max = haystack.length;

    do {
        const mid = Math.floor(min + (max - min) / 2);
        const val = haystack[mid];

        if (val === needle) {
            return true;
        } else if (val > needle) {
            max = mid;
        } else {
            min = mid + 1;
        }
    } while (min < max);
    return false;
}
