class Solution {
    twoSum(numbers: number[], target: number): number[] {
        for (let i = 0; i < numbers.length-1;) {
            for (let j = numbers.length-1; i < j;) {
                const current: number = numbers[i] + numbers[j];
                if (current == target)
                    return [i+1, j+1];
                else if (current < target)
                    i++;
                else
                    j--;
            }
        }
        return [];
    }
}
