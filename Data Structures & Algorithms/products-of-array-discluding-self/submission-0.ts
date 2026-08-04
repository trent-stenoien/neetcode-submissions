class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const pref: number[] = [];
        const suff: number[] = [];
        const res: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            if (i == 0)
                pref[i] = 1;
            else
                pref[i] = nums[i-1] * pref[i-1];
        }

        for (let i = nums.length-1; i >= 0; i--) {
            if (i == nums.length-1)
                suff[i] = 1;
            else
                suff[i] = nums[i+1] * suff[i+1];
            
            res[i] = pref[i] * suff[i];
        }

        return res;
    }
}
