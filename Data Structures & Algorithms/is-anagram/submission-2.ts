class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length) return false;
        
        const hm: Map<string, number> = new Map();

        for (let i = 0; i < s.length; i++) {
            hm[s[i]] = (hm[s[i]] ?? 0) + 1;
            hm[t[i]] = (hm[t[i]] ?? 0) - 1;
        }

        return !Object.values(hm).some(v => v != 0);
    }
}
