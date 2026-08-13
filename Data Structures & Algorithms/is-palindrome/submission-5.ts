class Solution {
    isPalindrome(s: string): boolean {
        const s2 = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let i = 0;
        let j = s2.length-1-i;
        while (i < j) {
            if (s2[i] != s2[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}
