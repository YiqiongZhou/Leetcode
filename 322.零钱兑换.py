#
# @lc app=leetcode.cn id=322 lang=python
#
# [322] 零钱兑换
#

# @lc code=start
class Solution(object):
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
        coins = sorted(coins)

        if amount==0:return 0
        if amount < coins[0]: return -1
        res = [0]
        res.extend([ -1 for i in range(coins[0]-1)])
        # res.append(1)
        for i in range(coins[0], amount+1):
            tmp_res = 10e5
            for c in coins:
                if i-c<0: break
                if res[i-c]<0: break
                tmp_res = tmp_res if res[i-c]+1 > tmp_res else res[i-c]+1
            if tmp_res==10e5:tmp_res=-1
            res.append(tmp_res)
            # if tmp_res>0:print(res)
        # print(res)
        return res[-1]
            
        
    
# @lc code=end

