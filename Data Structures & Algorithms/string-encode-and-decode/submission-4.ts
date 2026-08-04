class Solution {

    sep: string = "&%";

    encode(strs: string[]): string {
        if (strs.length === 0) return 'empty' + this.sep;
        return strs.join(this.sep);
    }

    decode(str: string): string[] {
        if (str === 'empty' + this.sep) return [];
        return str.split(this.sep);
    }
}
