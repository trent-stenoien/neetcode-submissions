class Solution {
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === '+')
                stack.push(stack.pop() + stack.pop());
            else if (tokens[i] === '-') {
                const aft: number = stack.pop();
                stack.push(stack.pop() - aft);
            }
            else if (tokens[i] === '*')
                stack.push(stack.pop() * stack.pop());
            else if (tokens[i] === '/') {
                const aft: number = stack.pop();
                stack.push(Math.trunc(stack.pop() / aft));
            }
            else
                stack.push(Number(tokens[i]));
        }

        return stack.pop();
    }
}
