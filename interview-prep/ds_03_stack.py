#!/usr/bin/env python3  # script marker
from typing import List  # type hints for stack contents and arrays


def is_balanced_brackets(s: str) -> bool:
    pairs = {")":  "(", "]":  "[", "}":  "{"}  # map each closer to its matching opener
    stack: List[str] = []  # LIFO container of unmatched opening brackets
    for ch in s:  # scan string left to right
        if ch in "([{":  # opening symbol
            stack.append(ch)  # remember we need a future closer
        elif ch in ")]}":  # closing symbol
            if not stack or stack[-1] != pairs[ch]:  # empty or top does not match this closer
                return False  # invalid nesting
            stack.pop()  # matched; remove corresponding opener
    return len(stack) == 0  # valid only if nothing left unmatched


def max_nesting_depth(s: str) -> int:
    depth = 0  # current open-paren depth while scanning
    best = 0  # maximum depth observed
    for ch in s:  # character loop (example focuses on '(' and ')')
        if ch == "(":  # open increases depth
            depth += 1  # go deeper
            best = max(best, depth)  # track peak nesting
        elif ch == ")":  # close decreases depth
            depth -= 1  # return toward outer level
    return best  # report deepest nesting reached


def daily_temperatures_wait_days(temps: List[int]) -> List[int]:
    n = len(temps)  # number of days
    wait = [0] * n  # answer[i] days until warmer; default 0 means never or end
    stack: List[int] = []  # stores indices with decreasing temps (monotonic stack pattern)
    for i in range(n):  # current day index
        while stack and temps[i] > temps[stack[-1]]:  # warmer day resolves waits for stack tops
            j = stack.pop()  # day index that now gets its answer
            wait[j] = i - j  # distance in days to warmer temperature
        stack.append(i)  # push current index; defer its answer
    return wait  # complete waits array


def main() -> None:
    print("balanced", is_balanced_brackets("([{}])"), is_balanced_brackets("([)]"))  # stack demo
    print("nesting", max_nesting_depth("((()))"))  # depth demo
    print("wait_days", daily_temperatures_wait_days([73, 74, 75, 71, 69, 72, 76, 73]))  # mono stack demo


if __name__ == "__main__":
    main()  # run examples
