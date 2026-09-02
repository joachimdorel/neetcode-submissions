class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for (let i=0; i<nums.length-1; i++) {
            for (let j=1; j<nums.length; j++) {
                if (nums[i]===nums[j] && i!==j) return true
            }
        }
        return false
    }
}
