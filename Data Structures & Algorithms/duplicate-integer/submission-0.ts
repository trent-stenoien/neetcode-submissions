class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hm: Object = {};

        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            if (hm[val]) return true;
            hm[val] = true;
        }

        return false;
    }
}
