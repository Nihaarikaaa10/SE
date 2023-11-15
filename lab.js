function rd(arr){
    var freq = {};
    var unique = [];
    for(var i of arr){
        if(!freq[i]){
            freq[i] = true;
            unique.push(i);
        }
    }
    return unique;
}
var arr = [1,2,1,2,1,3,4,1,2,5];
console.log(rd(arr))