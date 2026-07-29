class Solution {

    groupAnagrams(strs: string[]): string[][] {

        // Map<sortedStr, [str1, str2, etc]>
        const orderedStrs: Map<string, string[]> = new Map();
        
        for (let i = 0; i < strs.length; i++) {
            
            // Sort the given string to use as a key
            const sortedStr: string = strs[i].split("").sort().join("");

            // If the key exists, push cur str into the array
            if (orderedStrs.has(sortedStr))
                orderedStrs.get(sortedStr).push( strs[i] );
            // Else create the key and array value
            else
                orderedStrs.set(sortedStr, [strs[i]] );
        }

        const r = Array.from(orderedStrs.values());

        orderedStrs.clear();

        // Convert the Map's values into an array of string arrays.
        return r;
    }
}
