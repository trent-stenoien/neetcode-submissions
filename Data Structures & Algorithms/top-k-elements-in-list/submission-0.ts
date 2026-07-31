class Solution {
    topKFrequent(nums: number[], k: number): number[] {

        // Counts
        const count = {};
        // Freq: [ i/cnt: val/n ]
        const freq: number[][] = Array.from(
            { length: nums.length + 1 },
            () => []
        );
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        };
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        };
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length == k) {
                    return res;
                }
            }
        }
    }
}