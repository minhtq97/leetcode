# https://leetcode.com/problems/dota2-senate/
# Example:
# Input: senate = "RD"
# Output: "Radiant"
# Explanation: 
# The first senator comes from Radiant and he can just ban the first senator's right in the round 1. 
# And the second senator can't exercise any rights anymore since his right has been banned. 
# And in the round 2, the first senator can just ban the second senator's right since he is the only guy in the senate who can vote. 
# So the radiant wins.
from collections import deque
class Solution:
    """Solution class for Dota2 Senate problem."""
    def predictPartyVictory(self, senate: str) -> str:
        """Predict which party will win the senate voting."""
        radiant = deque()
        dire = deque()
        n = len(senate)
        for i, s in enumerate(senate):
            if s == 'R':
                radiant.append(i)
            else:
                dire.append(i)
        while radiant and dire:
            r = radiant.popleft()
            d = dire.popleft()
            if r < d:
                radiant.append(r + n)
            else:
                dire.append(d + n)


        return "Radiant" if radiant else "Dire"

print(Solution().predictPartyVictory("RD"))
print(Solution().predictPartyVictory("RDD"))
print(Solution().predictPartyVictory("DDRRR"))
print(Solution().predictPartyVictory("DDRRR"))