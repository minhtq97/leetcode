#!/usr/bin/env python3  # executable script marker
import sys  # stdout fallback when no output path
from datetime import datetime  # validate YYYY-MM-DD strictly
from typing import Optional  # optional output path type (Python 3.9 compatible)


def normalize_line(line: str) -> str:
    return " ".join(line.split())  # split on any whitespace, rejoin with single spaces


def starts_with_bracket_date(line: str) -> bool:
    if len(line) < 12 or line[0] != "[" or line[11] != "]":  # need "[YYYY-MM-DD]" exactly 12 chars
        return False  # too short or wrong bracket positions
    inner = line[1:11]  # slice the date text between brackets
    try:  # strptime raises if month/day invalid
        datetime.strptime(inner, "%Y-%m-%d")  # ensure real calendar date, not arbitrary digits
    except ValueError:  # bad date
        return False  # reject line
    return True  # prefix is a bracketed ISO date


def process(input_path: str, output_path: Optional[str]) -> None:
    out = open(output_path, "w", encoding="utf-8") if output_path else sys.stdout  # file or stdout
    try:  # ensure we close real files on error
        with open(input_path, encoding="utf-8") as f:  # read input logs
            for raw in f:  # each line including newline
                normalized = normalize_line(raw.rstrip("\n\r"))  # trim ends then collapse internal spaces
                if not normalized:  # drop empty after normalization
                    continue  # skip
                if not starts_with_bracket_date(normalized):  # keep only timestamp-leading lines
                    continue  # skip non-matching logs
                out.write(normalized + "\n")  # write one normalized record per line
    finally:  # always run cleanup
        if output_path:  # sys.stdout must not be closed by us
            out.close()  # flush and release OS handle for output file


def main() -> None:
    if len(sys.argv) < 2:  # require input path
        print(
            "usage: problem_04_normalize_logs.py <input.txt> [output.txt]",
            file=sys.stderr,  # help text
        )
        sys.exit(1)  # error code
    out = sys.argv[2] if len(sys.argv) > 2 else None  # optional third arg selects output file
    process(sys.argv[1], out)  # argv[1] input, out path or None


if __name__ == "__main__":
    main()  # CLI
