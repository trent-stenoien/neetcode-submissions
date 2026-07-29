class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length != t.length) return false;

        const cnt: Object = {};

        for (let i = 0; i < s.length; i++) {
            
            if (cnt[s[i]]) cnt[s[i]] += 1;
            else cnt[s[i]] = 1;
            
            if (cnt[t[i]]) cnt[t[i]] -= 1;
            else cnt[t[i]] = -1;
        }

        console.log(cnt);

        return !Object.values(cnt).some(val => val != 0);
    }
}
