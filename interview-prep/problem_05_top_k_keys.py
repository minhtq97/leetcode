#!/usr/bin/env python3  # interpreter
import sys  # CLI
from collections import defaultdict  # counting helper


def count_keys(input_path: str) -> dict[str, int]:
    counts: dict[str, int] = defaultdict(int)  # key -> line count (duplicate of problem 01 logic)
    with open(input_path, encoding="utf-8") as f:  # stream input
        for raw in f:  # line by line
            line = raw.strip()  # trim
            if not line:  # skip empty
                continue  # next
            key, sep, _value = line.partition(",")  # key is before first comma
            if not sep:  # need a comma in the row
                continue  # ignore malformed
            counts[key.strip()] += 1  # increment frequency for cleaned key
    return dict(counts)  # plain mapping of final counts


def top_k_keys(counts: dict[str, int], k: int) -> list[tuple[str, int]]:
    if k <= 0:  # guard nonsensical K
        return []  # nothing to return
    items = sorted(counts.items(), key=lambda x: (-x[1], x[0]))  # sort by count desc, then key asc for ties
    return items[: min(k, len(items))]  # first k pairs, or all if fewer than k keys exist


def main() -> None:
    if len(sys.argv) < 3:  # need input path and integer K
        print(
            "usage: problem_05_top_k_keys.py <input.txt> <K>",
            file=sys.stderr,  # usage on stderr
        )
        sys.exit(1)  # bad args
    k = int(sys.argv[2])  # parse K from argv[2]; raises if not integer
    counts = count_keys(sys.argv[1])  # build frequency table from file
    for key, c in top_k_keys(counts, k):  # emit only the top slice
        print(f"{key} {c}")  # print key and its count


if __name__ == "__main__":
    main()  # run
