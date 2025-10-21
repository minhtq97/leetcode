/**
 * You are given n rooms, numbered from 0 to n - 1, and each room may contain keys to other rooms. 
 * Initially, you start in room 0. 
 * The goal is to determine whether you can visit all the rooms using the keys you collect. 
 * Each room is represented as a list of keys, and the input is a list of these lists.
 * 
 * Example 1:
 * Input: rooms = [[1],[2],[3],[]]
 * Output: true
 * Explanation: You can visit all the rooms starting from room 0.
 * 
 * Example 2:
 * Input: rooms = [[1,3],[3,0,1],[2],[0]]
 * Output: false
 * Explanation: You cannot visit all the rooms starting from room 0.
 */


/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
// Explanation:
// 1. We use a set to keep track of the rooms we have visited.
// 2. We use a DFS to visit all the rooms.
// 3. We add the current room to the set of visited rooms.
// 4. We then visit all the rooms that the current room has a key to.
// 5. If we visit all the rooms, we return true.
// 6. Otherwise, we return false.
// why choose dfs? because we want to visit all the rooms, and we want to visit the rooms in the order of the keys.
// if we use bfs, we need to visit all the rooms in the order of the keys, which is not what we want.
// if we use bfs, we need to visit all the rooms in the order of the keys, which is not what we want.
const canVisitAllRooms = function(rooms) {
    const visited = new Set();
    function dfs(room) {
        visited.add(room);
        for(const key of rooms[room]){
            if(!visited.has(key)){
                dfs(key);
            }
        }
    }
    dfs(0)
    return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));