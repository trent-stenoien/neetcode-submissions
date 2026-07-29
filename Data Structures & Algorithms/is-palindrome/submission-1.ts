class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        const s2: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        for (let i = 0; i < s2.length; i++) {
            
            let j = s2.length-1-i;
            
            if (i >= j) break;
            
            if (s2[i] != s2[j]) return false;
        }

        return true;
    }
}
