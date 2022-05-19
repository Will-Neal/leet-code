const nums = [1, 2, 1]


var getConcatenation = function(arr) {
    const ans = []
    const sec = []
    for (i=0; i<arr.length; i++) {
        ans.push(arr[i]);
        sec.push(arr[i])
    }
    for (i=0; i<sec.length; i++) {
        ans.push(sec[i])
    }
    return ans
}

console.log(getConcatenation(nums))
