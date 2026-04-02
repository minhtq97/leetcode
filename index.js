// Có n trạm xăng chạy vòng tròn
// gas[i]: lượng xăng nhận được tại trạm i
// cost[i]: lượng xăng cần để đi từ trạm i → i+1
// Xe bắt đầu với 0 xăng
// Hỏi: có thể xuất phát từ trạm nào để đi hết vòng không?
// Nếu có → trả về index trạm
// Nếu không → -1

/**
 *  gas  = [1,2,3,4,5]
 *  cost = [3,4,5,1,2]
 *  Expected = 3
 *  
 * 
 * 
 */

function isPosibleCompleteCircle(gas,cost) {
    let ans = 0;

    for(let i = 0;i < gas.length; i++) {
        let remanin = gas[i]
        if(cost[i] > remain) continue;
        else {
            ans = i
            remain = remain - cost[i];
            let arr = Array.of(gas.length).map()
            for(let j = i; j++; )
        }
    }
}