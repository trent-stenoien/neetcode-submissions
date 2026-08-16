class Solution {
    /**
     * set l to min
     * set r to max
     * set res to max
     * while (l <= r)
     *      k = floor((l+r)/2) // (min + max) / 2
     *      for all piles
     *          get sum of (pile / k)
     *      if totalTime <= h
     *          res = k
     *          
     * This was copied from the solution so I could better understand this problem when I circle back to it.
     */
    minEatingSpeed(piles: number[], h: number): number {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while (l <= r) {
            const k = Math.floor((l + r) / 2);
            let totalTime = 0;
            for (const p of piles) {
                totalTime += Math.ceil(p / k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}