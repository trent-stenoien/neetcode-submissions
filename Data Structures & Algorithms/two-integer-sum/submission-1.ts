class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hm: Map<number, number> = new Map();

        for (let i = 0; i < nums.length; i++) {
            const need: number = target - nums[i];

            if (hm.has(need)) return [hm.get(need), i];

            hm.set(nums[i], i);
        }

        return [];
    }
}