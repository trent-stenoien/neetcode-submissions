class Solution {
    isValidSudoku(board: string[][]): boolean {

        const cols: Object = new Object();
        const boxes: Object = new Object();
        let boxY: number = 0;

        for (let i = 0; i < 9; i++) {
            if (i % 3 == 0) boxY += 3;

            // Nest in for i because we parse L to R so once we're done we can forget this row
            const rows: Object = new Object();
            let boxX: number = 0;

            for (let j = 0; j < 9; j++) {

                if (j % 3 == 0) boxX += 1;
                const box: number = boxX + boxY;
                if (!boxes[box]) boxes[box] = new Object();
                if (!cols[j]) cols[j] = new Object();


                // Skip over empties
                if (board[i][j] == '.') continue;
                
                const val: number = Number(board[i][j]) - 1;

                console.log(cols[j][val], rows[val], boxes[box][val])

                // Check for conflicts and return false if found
                if (cols[j].hasOwnProperty(val)) return false;
                if (rows.hasOwnProperty(val)) return false;
                if (boxes[box].hasOwnProperty(val)) return false;

                // Else, mark val existence
                cols[j][val] = true;
                rows[val] = true;
                boxes[box][val] = true;
            }
        }

        return true;
    }
}