/*

Input: nums = [-1,0,1,2,-1,-4]
Input: nums2 = [-4,-1,-1,0,1,2]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = [0,1,1]
Output: []

Input: nums = [0,0,0]
Output: [[0,0,0]]

Input: nums = [-1,-1,0,1,1]
Output: [[-1,0,1]]

*/

class Solution {

    threeSum(nums: number[]): number[][] {
        
        const nums2: number[] = nums.sort((a,b) => a-b);
        const res: number[][] = [];

        for (let i = 0; i < nums2.length-2; i++) {

            if (nums2[i] > 0) break;

            if (nums2[i] == nums2[i-1]) continue;

            let j = i+1;
            let k = nums2.length-1;

            while (j < k) {

                if (nums2[j] == nums2[j-1] && i < j-1) {
                    j++;
                    continue;
                }

                if (nums2[i] + nums2[j] + nums2[k] == 0) {
                    res.push([nums2[i], nums2[j], nums2[k]]);
                    if (nums2[i] == 0) break;
                }
                
                if (nums2[i] + nums2[j] + nums2[k] <= 0)
                    j++;
                else
                    k--;
            }
        }

        return res;
    }
}
