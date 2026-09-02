class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length-1; i++) {
            for (let j = 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target && i !== j) {
                    return [i, j]
                }
            }
        }
    }
}
