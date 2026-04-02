#!/usr/bin/env python3  # script marker
import heapq  # binary min-heap: smallest element at heap[0]
from typing import Iterable, List, Tuple  # annotations


def k_smallest(nums: Iterable[int], k: int) -> List[int]:
    return heapq.nsmallest(k, nums)  # efficient partial selection; returns sorted ascending list of k items


def k_largest(nums: Iterable[int], k: int) -> List[int]:
    return heapq.nlargest(k, nums)  # library uses heaps internally to avoid sorting entire iterable


def top_k_by_frequency_streaming(counts: List[Tuple[str, int]], k: int) -> List[Tuple[str, int]]:
    heap: List[Tuple[int, str]] = []  # min-heap on count keeps k highest seen so far
    for word, c in counts:  # simulate streaming key-count pairs
        if len(heap) < k:  # fill until k elements
            heapq.heappush(heap, (c, word))  # push tuple; compare by count then word lexicographically
        elif c > heap[0][0]:  # better than current kth-best count
            heapq.heapreplace(heap, (c, word))  # pop smallest of top-k, push new (faster than pop+push)
    return sorted(heap, key=lambda x: (-x[0], x[1]))  # present result sorted by freq desc then word


def merge_sorted_lists(lists: List[List[int]]) -> List[int]:
    heap: List[Tuple[int, int, int]] = []  # entries: (value, list_index, index_in_list)
    for i, lst in enumerate(lists):  # seed heap with first element of each non-empty list
        if lst:  # ignore empty lists
            heapq.heappush(heap, (lst[0], i, 0))  # smallest heads compete at top of heap
    out: List[int] = []  # merged output in non-decreasing order
    while heap:  # consume until all lists exhausted
        val, li, j = heapq.heappop(heap)  # smallest next value across all lists
        out.append(val)  # append to merged result
        nxt = j + 1  # advance within list li
        row = lists[li]  # alias current list
        if nxt < len(row):  # if more elements remain in that list
            heapq.heappush(heap, (row[nxt], li, nxt))  # push next candidate from same list
    return out  # fully merged sequence


def main() -> None:
    nums = [3, 1, 4, 1, 5, 9, 2, 6]  # demo numbers
    print("k_smallest", k_smallest(nums, 3))  # three smallest
    print("k_largest", k_largest(nums, 3))  # three largest
    pairs = [("a", 5), ("b", 1), ("c", 5), ("d", 9), ("e", 2)]  # word-frequency samples
    print("top_k_freq", top_k_by_frequency_streaming(pairs, 3))  # streaming top-k style
    print("merge_sorted", merge_sorted_lists([[1, 4, 7], [2, 5], [3, 6, 8, 9]]))  # k-way merge


if __name__ == "__main__":
    main()  # execute demos
