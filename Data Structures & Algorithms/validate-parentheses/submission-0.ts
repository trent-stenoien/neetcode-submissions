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

            const lastChar: string = temp[temp.length-1];

            // If cur char is an ending bracket, 
            if (lastChar && openingBrackets.get(s[i]) == lastChar)
                temp.pop();
            else
                temp.push(s[i])
        }

        console.log(temp);

        return temp.length == 0;
    }
}