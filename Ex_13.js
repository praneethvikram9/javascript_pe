function ques13(array){
    var result = [];
    for(var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result = result.concat(ques13(array[i]));
        }
        else{
            result.push(array[i]);
        }
    }

   return result;
}
var result = ques13([5,[22],[[14]],[[4]],[5,6]]);
    console.log(result);