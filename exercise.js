const latinWords = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"]

for (let x = 0; x < latinWords.length; x++) {
    // console.log(latinWords[x])

    if ((latinWords[x].length > 4) && (latinWords[x].toLowerCase() == latinWords[x])) {
        console.log('long and lowercase');
    } else if (latinWords[x].toLowerCase() == latinWords[x]) {
        console.log('lowercase');
    } else if (latinWords[x].length > 4) {
        console.log('long');
    } else {
        console.log(latinWords[x]);
    }
}