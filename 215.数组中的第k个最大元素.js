/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    // let counter=new Array(2*10000+1).fill(0);
    
    // for (let index = 0; index < nums.length; index++) {
    //     counter[nums[index]+10000] ++;
    //     // console.log(nums[index]+10000, counter[nums[index]+10000]);
    // }
    // // console.log(counter.length, counter[counter.length])
    // for (let index = counter.length-1; index >0 ; index--) {
    //     k=k-counter[index];
    //     if (k <= 0) {
    //         return index-10000;
    //         break
    //     }
    // }

    //快速排序是找到每个的位置

    len = nums.length;
    let target = len - k;
    let left = 0, right = len - 1;
    let res;

    const swap = ((nums, i, j) => {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    });

    // const partition = ((nums, left, right) => {
    //     let base=Math.floor(Math.random()*(right-left))+left;
    //     swap(nums, left, base);
    //     let pivot = nums[left];
    //     let le = left + 1;
    //     let ge = right;


    //     while (true) {
    //         while (le <= ge && nums[le] < pivot) {
    //             le++;
    //         }
            
    //         while (le <= ge && nums[ge] > pivot) {
    //             ge--;
    //         }
            
    //         if (le >= ge) {
    //             break;
    //         }
    //         swap (nums, le, ge);
    //         le++;
    //         ge--;
    //     }
        
    //     swap(nums, left, ge);
    //     return ge;
    // });
    const partition = ((nums, low, high) => {

        // let base = left;
        // base 打乱顺序
        // let low=left;
        let base=Math.floor(Math.random()*(high-low))+low;
        let pivot=nums[base];
        let left = low;
        let right = high;
        swap(nums,low,base);

        //有个等号 nums[right] >=pivot
        //先是right变

        // let left = low;
        // let right = high;
        // let pivot = nums[low];

        while (left < right) {
            while (nums[right] >=pivot && left <right) {
                right -= 1;
            }

            while (nums[left] <=pivot && left<right) {
                left += 1;
            }

            if (left < right) {
                swap(nums, left, right);
            } 
                // partition(nums,right,len-1);
                // partition(nums,base,left);
        }
        swap(nums, low, left);
        return right;  
    });


    // function partition(nums, low, high) {

    //     let left = low;
    //     let right = high;
    //     let base = nums[low];

    //     if (left > right) {
    //         return;
    //     }
    //     while (left < right) {

    //         while (nums[right] >= base && left < right) {
    //             right -= 1
    //         }

    //         while (nums[left] <= base && left < right) {
    //             left += 1
    //         }


    //         if (left < right) {
    //             swap(nums, left, right);
    //         }
    //     }
    //     swap(nums, low, left);
    //     // console.log(nums,right)
    //     return right;
    //     // QuickSort(nums, low, right - 1);
    //     // QuickSort(nums, right + 1, high);
    // }

    // left 要等于right才能找到，才是最终确定的唯一位置
    while (left <= right) {  
        res=partition(nums, left, right);
        if (res < target) {
            left = res+1;
        } else if(res>target) {
            right = res-1;
        } else{
            return nums[res];
        }
 
    }


};
// @lc code=end

