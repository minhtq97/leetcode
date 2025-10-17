/**
 * Number of Recent Calls
 * 
 * You have a RecentCounter class which counts the number of recent requests within a certain time frame.
 * 
 * Implement the RecentCounter class:
 * 
 * RecentCounter() Initializes the counter with zero recent requests.
 * int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of calls to ping with strictly increasing values of t.
 * 
 * Example 1:
 * Input:
 * ["RecentCounter", "ping", "ping", "ping", "ping"]
 * [[], [1], [100], [3001], [3002]]
 * Output:
 * [null, 1, 2, 3, 3]
 * 
*/

var RecentCounter = function() {
    this.queue = [];
};

RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));