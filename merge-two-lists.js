const listA = []
const listB = [0]


var mergeTwoLists = function(list1, list2) {
    const mergedList = []
    for (i=0; i<list1.length; i++) {
        if (list1[i] < list2[i]) {
            mergedList.push(list1[i])
            mergedList.push(list2[i])
        } else {
            mergedList.push(list2[i])
            mergedList.push(list1[i])
        }
    }
    return mergedList
};

mergeTwoLists(listA, listB)
console.log(mergeTwoLists(listA, listB))