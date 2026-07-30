class MinStack {

    stack: number[];
    min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {

        this.stack.push(val);

        if (this.min.length == 0
            || val <= this.min[this.min.length-1])
                this.min.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {

        const val = this.stack.pop();
        
        if (val == this.min[this.min.length-1])
            this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        // Naive: Loop through array to find min.
        return this.min[this.min.length-1];
    }
}
