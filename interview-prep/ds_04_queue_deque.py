#!/usr/bin/env python3  # script hint
from collections import deque  # O(1) append and popleft on both ends
from typing import Deque, Dict, List, Set  # typing for clarity


def bfs_levels(adj: Dict[str, List[str]], start: str) -> List[List[str]]:
    seen: Set[str] = {start}  # visited set prevents revisiting nodes in undirected/mixed graphs
    q: Deque[str] = deque([start])  # FIFO frontier of BFS; start with source node
    levels: List[List[str]] = []  # collect nodes grouped by distance from start
    while q:  # continue while frontier non-empty
        level = list(q)  # snapshot current frontier as one BFS layer
        q.clear()  # prepare to enqueue next layer only
        levels.append(level)  # record this distance layer
        for u in level:  # expand each node in the layer
            for v in adj.get(u, []):  # iterate outgoing neighbors; missing key -> empty list
                if v not in seen:  # enqueue unseen neighbor
                    seen.add(v)  # mark visited before enqueue to avoid duplicates
                    q.append(v)  # push to next-wave queue (back of deque)
    return levels  # ordered list of layers


def sliding_window_sum(nums: List[int], k: int) -> List[int]:
    if k <= 0 or k > len(nums):  # invalid window
        return []  # no outputs
    window: Deque[int] = deque(nums[:k])  # first k elements as initial window
    out = [sum(window)]  # first window aggregate
    for i in range(k, len(nums)):  # slide window across tail of array
        window.popleft()  # drop element leaving window (left side)
        window.append(nums[i])  # add new element entering from right
        out.append(sum(window))  # recompute sum for this window (interview: mention O(k) sum cost)
    return out  # all window sums


def round_robin_turns(names: List[str], rounds: int) -> List[str]:
    q: Deque[str] = deque(names)  # rotating fair queue of players
    order: List[str] = []  # who acted each round, in sequence
    for _ in range(rounds):  # fixed number of turns
        if not q:  # stop if queue emptied (defensive)
            break  # exit early
        name = q.popleft()  # FIFO: next participant
        order.append(name)  # log turn
        q.append(name)  # put them back at end for next cycle
    return order  # full schedule


def main() -> None:
    g = {"A": ["B", "C"], "B": ["D"], "C": [], "D": []}  # tiny directed graph adjacency
    print("bfs_levels", bfs_levels(g, "A"))  # layer demo
    print("sliding_window_sum", sliding_window_sum([1, 2, 3, 4, 5], 3))  # deque sliding demo
    print("round_robin", round_robin_turns(["a", "b", "c"], 7))  # FIFO rotation demo


if __name__ == "__main__":
    main()  # run samples
