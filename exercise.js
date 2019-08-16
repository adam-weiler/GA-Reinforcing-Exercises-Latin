const latinWords = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];

const isLongWord = word => word.length > 4
const isLowerCase = word => word.toLowerCase() == word

function testWord(word) {
    // console.log(word)

    if (isLongWord(word) && isLowerCase(word)) {
        console.log('long and lowercase');
    } else if (isLowerCase(word)) {
        console.log('lowercase');
    } else if (isLongWord(word)) {
        console.log('long');
    } else {
        console.log(word);
    }
}

latinWords.forEach(testWord);