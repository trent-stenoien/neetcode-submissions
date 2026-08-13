class Solution {
    isPalindrome(s: string): boolean {
        const s2 = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let i = 0;
        let j = s2.length-1-i;
        while (true) {
            if (s2[i] != s2[j]) return false;
            i++;
            j--;
            if (i >= (s2.length-1)/2) return true;
        }
    }
}
