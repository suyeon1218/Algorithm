
const isOutOfBound = (board, row, col) => {
    return row < 0 || row >= board.length || col < 0 || col >= board[0].length;
}

const checkNeighbors = (board, word, row, col) => {
    if (!word.length) return true;
    // * word를 하나씩 없애다가 word의 길이가 0이 되면 return true

    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) {
        return false;
    }
    // * bound 를 벗어나거나 넘어온 값이 word[0]과 일치하지 않으면 false return

    const currentChar = board[row][col];
    const newWord = word.substring(1);
    // * index : 1 이후의 숫자를 반환

    board[row][col] = 0;
    // * 지나온 숫자는 다시 탐색하지 못하도록 함

    // * 상하좌우 탐색
    const results = checkNeighbors(board, newWord, row + 1, col) ||
    checkNeighbors(board, newWord, row - 1, col) ||
    checkNeighbors(board, newWord, row, col + 1) ||
    checkNeighbors(board, newWord, row, col - 1);

    board[row][col] = currentChar;

    return results;
}

/**
 * 
 * @param {character[][]} board 
 * @param {string} word 
 * @returns {boolean}
 */
const exist = (board, word) => {
    for (let row=0; row<board.length; row++) {
        for (let col=0; col<board[0].length; col++) {
            if (checkNeighbors(board, word, row, col)) return true;
        }
    }
}

const inputBoard = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const inputWord = "ABCCED"

exist(inputBoard, inputWord);