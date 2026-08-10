class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        let div: number = 2;
        let i: number = Math.floor(nums.length/div);

        while (true) {

            if (nums[i] == target) {
                return i;
            }

            div *= 2;
            const inc: number = Math.ceil(nums.length/div);

            if (inc < 1 || i > nums.length-1 || i < 0) {
                break;
            }
            else if (nums[i] < target) {
                i += inc;
            }
            else if (nums[i] > target) {
                i -= inc;
            }
        }

        return -1;
    }
}
