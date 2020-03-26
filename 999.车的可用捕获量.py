#
# @lc app=leetcode.cn id=999 lang=python3
#
# [999] 车的可用捕获量
#

# @lc code=start
class Solution:
    def numRookCaptures(self, board: List[List[str]]) -> int:
        #找到四个方向的公共性

        for i in range(8):
            for j in range(8):
                if board[i][j]=="R":
                    x,y=i,j
                    break
        dx=[1,0,-1,0]
        dy=[0,-1,0,1]
        ans=0


        for i in range(4):#四个方向
            step=1
            while True:#控制循环，让其循环可以加1
                tx=x+step*dx[i]
                ty=y+step*dy[i]
                if tx==8 or ty==8 or tx==-1 or ty==-1 or board[tx][ty]=="B":
                    break
                if board[tx][ty]=="p":
                    ans+=1
                    break
                step+=1
        return  ans





        



        
# @lc code=end

