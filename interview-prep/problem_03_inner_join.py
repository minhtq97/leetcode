#!/usr/bin/env python3  # interpreter hint
import sys  # command-line arguments


def load_id_name(path: str) -> dict[str, str]:
    out: dict[str, str] = {}  # will map id -> name from the first file only
    with open(path, encoding="utf-8") as f:  # read first relation (left side of join)
        for raw in f:  # line loop
            line = raw.strip()  # normalize line
            if not line:  # skip blanks
                continue  # next line
            id_part, sep, name = line.partition(",")  # id before first comma, name after
            if not sep:  # missing comma
                continue  # skip bad row
            id_part = id_part.strip()  # canonical id string
            out[id_part] = name.strip()  # store name; duplicate ids overwrite (last wins)
    return out  # complete id->name index for join


def inner_join(path_a: str, path_b: str) -> None:
    id_to_name = load_id_name(path_a)  # load smaller or left file into hash map for O(1) lookups
    with open(path_b, encoding="utf-8") as f:  # stream second file; no full load required
        for raw in f:  # each score row
            line = raw.strip()  # trim
            if not line:  # ignore empty
                continue  # continue scanning
            id_part, sep, score = line.partition(",")  # split id and score fields
            if not sep:  # malformed
                continue  # skip
            id_part = id_part.strip()  # normalize id to match keys built from file A
            if id_part not in id_to_name:  # only emit rows present in both datasets
                continue  # this id has no matching name
            name = id_to_name[id_part]  # fetch joined name from map
            print(f"{id_part},{name},{score.strip()}")  # output combined CSV row to stdout


def main() -> None:
    if len(sys.argv) < 3:  # need two paths: A then B
        print(
            "usage: problem_03_inner_join.py <file_a id,name> <file_b id,score>",
            file=sys.stderr,  # usage on stderr
        )
        sys.exit(1)  # bad invocation
    # First CLI path is file A (id,name); second is file B (id,score).
    inner_join(sys.argv[1], sys.argv[2])


if __name__ == "__main__":
    main()  # entry point
