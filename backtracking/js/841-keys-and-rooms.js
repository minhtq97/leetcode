/**
 * Topic: Graph
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[][]} rooms
 * @return {boolean}
 * Explanation:
 * 1. Use a stack to keep track of the rooms we can visit.
 * 2. Use a set to keep track of the rooms we have visited.
 * 3. If we have visited all the rooms, return true.
 * 4. Otherwise, return false.
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set();
    const stack = [0];

    while(stack.length) {
        const room = stack.pop();
        if(visited.has(room)) continue;
        visited.add(room);
        for(const key of rooms[room]) {
            stack.push(key);
        }
    }

    return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));
console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));