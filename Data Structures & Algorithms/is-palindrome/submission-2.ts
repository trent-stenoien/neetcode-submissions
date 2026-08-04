class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let s2 = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        console.log(s2)
        let i = 0;
        let j = s2.length-1;
        
        while (i < j) {
            if (s2[i].toLowerCase() != s2[j].toLowerCase())
                return false;
            
            i++;
            j--;
        }

        return true;
    }
}
