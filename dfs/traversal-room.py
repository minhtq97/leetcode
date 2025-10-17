from typing import List
class Solution:
    @staticmethod
    def canVisitAllRooms(rooms: List[List[int]]) -> bool:
        visited = set()
        def dfs(room: int):
            visited.add(room)
            for key in rooms[room]:
                if key not in visited:
                    dfs(key)
        
        dfs(0)

        return len(rooms) == len(visited)

print(Solution().canVisitAllRooms([[1],[2],[3],[]]))      
print(Solution().canVisitAllRooms([[1,3],[3,0,1],[2],[0]])) 