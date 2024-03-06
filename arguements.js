function addNumber(num1, num2) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        var elements = arguments[i];
        sum = sum + elements;
    }
    function logMessage(){
        console.log("Good morning");
    }
    logMessage();
    return sum;
}
var result = addNumber(1, 2, 6, 2);
console.log(result);