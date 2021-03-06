// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //
    /*    for (var i = 0; i < arr.length; i++)
            arr.reduce(callback, arr);
        return arr;
    } */
    var i=0;
    var previousValue;
    if(typeof(initialValue) == "undefined") {
        i++;
        previousValue = arr[0];
    }else {
        previousValue = initialValue;
    }
    for (; i < arr.length; i++) {
        //arr.forEach(callback, arr);
        previousValue = callback(previousValue,arr[i], i, arr);
}
// return arr;
    return previousValue;
}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
