class Solution {
    isPalindrome(s: string): boolean {
        let i = 0;
        const s2 = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        while (true) {
            if (s2[i] != s2[s2.length-1-i]) return false;
            i++;
            if (i >= (s2.length-1)/2) return true;
        }
    }
}
