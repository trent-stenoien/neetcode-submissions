class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        
        let temp: string[] = [];

        const openingBrackets = new Map<string, string>();
        openingBrackets.set(')', '(');
        openingBrackets.set(']', '[');
        openingBrackets.set('}', '{');

        for (let i = 0; i < s.length; i++) {

            if (temp[temp.length-1] && openingBrackets.get(s[i]) == temp[temp.length-1])
                temp.pop();
            else
                temp.push(s[i])
        }

        return temp.length == 0;
    }
}