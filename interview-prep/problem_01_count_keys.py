#!/usr/bin/env python3  # run with python3 even if system has python2
import sys  # read CLI args (input path) and print errors to stderr
from collections import defaultdict  # dict that returns 0 for missing keys so we can += safely


def count_keys(input_path: str) -> dict[str, int]:
    counts: dict[str, int] = defaultdict(int)  # map each key string -> how many lines had that key
    with open(input_path, encoding="utf-8") as f:  # open text as utf-8; closes file when block ends
        for raw in f:  # stream line by line instead of reading whole file into memory
            line = raw.strip()  # remove leading/trailing whitespace and the trailing newline
            if not line:  # skip blank lines after strip
                continue  # go to next file line
            key, sep, _value = line.partition(",")  # split only on first comma; rest of line is value (ignored for count)
            if not sep:  # partition sets sep to "" if comma missing; line is not key,value
                continue  # skip malformed rows per this spec
            counts[key.strip()] += 1  # normalize key whitespace then bump its occurrence count
    return dict(counts)  # plain dict is easier to print/sort than defaultdict for callers


def main() -> None:
    if len(sys.argv) < 2:  # require at least script name and one path argument
        print("usage: problem_01_count_keys.py <input.txt>", file=sys.stderr)  # stderr keeps stdout clean for piping
        sys.exit(1)  # non-zero exit signals failure to shells
    counts = count_keys(sys.argv[1])  # argv[0] is program name; argv[1] is first user path
    for key in sorted(counts):  # deterministic output order for interview/demo
        print(f"{key} {counts[key]}")  # one key per line: name then integer count


if __name__ == "__main__":
    main()  # run CLI entry only when executed as a script, not when imported
