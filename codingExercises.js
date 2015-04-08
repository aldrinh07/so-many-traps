/**
 * Created by aldrinh on 2/28/15.
 */

var isPalindrome = function(str){
    //code here

    var bool = false;
    var revStr = str.split('').reverse().join('');

    if (revStr === str) {
        bool = true;
    }

    //
    return booleanValue;
}

var myStr = 'abccba';
isPalindrome(myStr); //true
var myStr2 = 'abcde';
isPalindrome(myStr2); //false

//-------------------------------

var isStringScrambled = function(str1, str2) {
    var sort1 = str1.split('').sort()
    var sort2 = str2.split('').sort()
    var bool:
    if (str1.length === str2.length) {
        for(var i = 0; i < str1.length; i++) {
            if (sort1[i] === sort2) // incomplete code
        }
    }
}


    //function that takes an array of intergers and determine if the mean and the mode equals the same.

var meanMode = function(arr){
    var mean;
    var mode;
    for (var i = 0; i < arr.length; i++) {
        mean += arr[i];
    }
    console.log(mean / arr.length);
    return booleanValue
};