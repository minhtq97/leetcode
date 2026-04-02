#!/usr/bin/env python3  # script entry hint
from typing import List  # annotate list parameters and returns for readability


def running_sum(nums: List[int]) -> List[int]:
    out: List[int] = []  # will hold prefix sum at each index
    s = 0  # running total accumulator across the walk
    for x in nums:  # visit values in input order
        s += x  # add current element to running total
        out.append(s)  # record prefix sum after including x
    return out  # list parallel to nums with cumulative sums


def count_by_bucket(values: List[int], num_buckets: int) -> List[int]:
    buckets = [0] * num_buckets  # preallocate counts per integer bucket index 0..num_buckets-1
    for v in values:  # scan all values to aggregate
        if 0 <= v < num_buckets:  # bounds check so we never index out of range
            buckets[v] += 1  # treat value as bucket id and increment
    return buckets  # frequency per bucket index


def two_pointer_pair_sum_sorted(arr: List[int], target: int) -> bool:
    i, j = 0, len(arr) - 1  # left at start, right at end (needs sorted arr for this pattern)
    while i < j:  # stop when pointers meet or cross
        s = arr[i] + arr[j]  # sum of current candidate pair
        if s == target:  # found a matching pair
            return True  # early success
        if s < target:  # sum too small: move left pointer right to increase sum
            i += 1  # shrink window from the left
        else:  # sum too large: move right pointer left
            j -= 1  # shrink window from the right
    return False  # no pair sums to target


def main() -> None:
    print("running_sum", running_sum([1, 2, 3, 4]))  # demo prefix sums
    print("count_by_bucket", count_by_bucket([0, 1, 1, 2, 0], 3))  # demo bucket histogram
    print("two_pointer", two_pointer_pair_sum_sorted([1, 2, 4, 6, 10], 8))  # demo find pair


if __name__ == "__main__":
    main()  # run demos when executed as script
