class RecentCounter:
    def __init__(self):
        self.queue = []

    def ping(self, t: int) -> int:
        self.queue.append(t)
        while self.queue[0] < t - 3000:
            self.queue.pop(0)
        return len(self.queue)


# Test the implementation
if __name__ == "__main__":
    recentCounter = RecentCounter()

    # Test case 1: [1, 100, 3001, 3002]
    print("Test 1:")
    print(recentCounter.ping(1))  # Expected: 1
    print(recentCounter.ping(100))  # Expected: 2
    print(recentCounter.ping(3001))  # Expected: 3
    print(recentCounter.ping(3002))  # Expected: 3

    # Test case 2: [1, 100, 3001, 3002, 3003, 3004]
    print("\nTest 2:")
    recentCounter2 = RecentCounter()
    print(recentCounter2.ping(1))  # Expected: 1
    print(recentCounter2.ping(100))  # Expected: 2
    print(recentCounter2.ping(3001))  # Expected: 3
    print(recentCounter2.ping(3002))  # Expected: 3
    print(recentCounter2.ping(3003))  # Expected: 4
    print(recentCounter2.ping(3004))  # Expected: 5

    # Test case 3: Edge case with time difference > 3000
    print("\nTest 3:")
    recentCounter3 = RecentCounter()
    print(recentCounter3.ping(1))  # Expected: 1
    print(recentCounter3.ping(100))  # Expected: 2
    print(recentCounter3.ping(3001))  # Expected: 3
    print(recentCounter3.ping(6001))  # Expected: 1 (only this ping is within 3000ms)
