function evenify(num){
    if(num % 2 ==0){
        return num;
    }
    else{
        return  num*2;
    }

}

function evenifyAll(nums){
    var even_array = [];
    for(var i = 0;i<nums.length;i++){
        var elements = nums[i];
        var result = evenify(elements);
        even_array.push(result);
    }
    return even_array;
}

var nums =[1,7,3,6,8,3,5];
var nums_even = evenifyAll(nums);
console.log(nums_even);

var result = evenify(13);
console.log(result*result);