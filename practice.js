
// find if a variable is inside an array;
var finder = function(inputArray, inputString){
    for(var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === inputString) {
            return true;
        }
    }
    return false;
}
// one line code
    return inputArray.indexOf(inputString) !== -1 ? true : false;


//


for (var i in myObj) {
    console.log(myObj[i]);
}


//


var logValue = function(x) {
    console.log(x());
};

logValue = function(){
    return prompt("whats your name");
};


var getName = function(){
    return prompt('what is your name?');
};

//replace any x in a string to y

var xToY = function(str){
    var letters = str.split('');
    var replaced = null;
        for(var i = 0; i < letters.length; i++){
            if (letters[i] === 'x'){
                letters.splice(i, 1, 'y');
            }
        }
    replaced = letters.join('');
    alert(replaced);
}

//jquery ajax api get data

$.ajax({
    url: 'http;//reddit.com/r/todayilearned.json',
    method: 'GET',
    success: function(data) {
        console.log(data);
    }
})

//

//find the only item that occurs an even number of times in an array.
//if there is more than one item that occurs an even number of times,...

//my attempt
var evenOccurence = function(array) {
    resultObject = {};
    for(var i = array.length - 1; i >= 0; i--) {
        resultObject[array[i]] = (resultObject[array[i]] || 0)+ 1;
    }
    console.log(resultObject);
};





//other solutions

var evenOccurence = function(array) {
    var i = array.length,
        results = {};

    while(i--) {
        results[array[i]] = (results[array[i]] || 0)+ 1;

    }

    keys = Object.keys(results);
    j = keys.length;

    while(j--) {
        if (results[keys[j]] % 2 === 0) {
            return parseInt(keys[j]);
        }
    }

    return null;
};




var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven); //4

var onlyEven = evenOccurence([1, 1, 3, 4, 1]);
console.log(onlyEven); // null

// capitalize string incomplete

var capitalize = function(str){
    words = str.split(' ');
    console.log(words);
    for(word in words){
        var capWord = word.charAt(0).toUpperCase();
    }
    console.log(capWord);
};

