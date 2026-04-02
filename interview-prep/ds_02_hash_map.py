#!/usr/bin/env python3  # executable script
from collections import Counter, defaultdict  # Counter counts; defaultdict auto-inits lists and floats
from typing import Dict, Iterable, List, Tuple  # static types for interview clarity


def count_keys(items: Iterable[str]) -> Dict[str, int]:
    return dict(Counter(items))  # Counter tallies hashable keys; dict() strips Counter-only extras


def group_by_first_field(rows: List[str]) -> Dict[str, List[str]]:
    groups: Dict[str, List[str]] = defaultdict(list)  # key -> list of trailing field strings
    for row in rows:  # each row string like "key,rest"
        key, sep, rest = row.partition(",")  # split on first comma only
        if sep:  # comma existed
            groups[key.strip()].append(rest.strip())  # append grouped payload under key
    return dict(groups)  # plain dict of lists


def index_by_id(records: List[Tuple[str, str]]) -> Dict[str, str]:
    return dict(records)  # tuple pairs are iterable of (key,value) suitable for dict(); later id wins if duplicated


def aggregate_sum_by_key(pairs: List[Tuple[str, float]]) -> Dict[str, float]:
    totals: Dict[str, float] = defaultdict(float)  # start each key at 0.0 implicitly
    for k, v in pairs:  # unpack key and numeric contribution
        totals[k] += v  # accumulate per-key sum (aggregation pattern)
    return dict(totals)  # finalize mapping key->total


def main() -> None:
    print("count_keys", count_keys(["a", "b", "a", "a"]))  # frequency table demo
    print("group_by_first_field", group_by_first_field(["x,1", "y,2", "x,3"]))  # grouping demo
    print("index_by_id", index_by_id([("1", "alice"), ("2", "bob")]))  # id lookup table demo
    print("aggregate_sum_by_key", aggregate_sum_by_key([("a", 1.0), ("b", 2.0), ("a", 3.0)]))  # sum demo


if __name__ == "__main__":
    main()  # demos
