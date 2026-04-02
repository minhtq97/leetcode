#!/usr/bin/env python3  # shebang for Unix-like systems to find interpreter
import sys  # argv for paths; stderr for usage
from collections import defaultdict  # accumulate floats per category without manual key checks


def sum_by_category(input_path: str) -> dict[str, float]:
    totals: dict[str, float] = defaultdict(float)  # each category string -> running sum of amounts
    with open(input_path, encoding="utf-8") as f:  # explicit encoding for reproducible reads
        for raw in f:  # one iteration per physical line in the file
            line = raw.strip()  # trim spaces and newline characters
            if not line:  # ignore empty lines
                continue  # next iteration
            category, sep, amount_str = line.partition(" ")  # first space splits category vs amount tail
            if not sep:  # no space means no amount token
                continue  # skip lines that do not match "category amount"
            category = category.strip()  # allow intentional spacing fix on left token
            try:  # float() throws if string is not numeric
                amount = float(amount_str.strip())  # parse amount; strips spaces around number
            except ValueError:  # bad number text
                continue  # skip corrupt line instead of crashing
            totals[category] += amount  # aggregate into the bucket for this category
    return dict(totals)  # return normal dict with final totals


def main() -> None:
    if len(sys.argv) < 2:  # missing input file argument
        print("usage: problem_02_sum_by_category.py <input.txt>", file=sys.stderr)  # tell user how to run
        sys.exit(1)  # signal failure
    totals = sum_by_category(sys.argv[1])  # compute sums from disk
    for category in sorted(totals):  # stable sorted keys for grading or diffing output
        print(f"{category} {totals[category]:.2f}")  # two decimal places as spec asked


if __name__ == "__main__":
    main()  # script main guard
