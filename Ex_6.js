


function ques6(array1,array2){
    var result=[];
    if(array1.length!=array2.length){
        console.log("both array sizes are not equal")
    }
    else{
        for(var i=0;i<array1.length;i++){
            var tem=array1[i]-array2[i]
            result.push(tem);
        }
    }
    for(var i=0;i<result.length;i++){
        console.log(result[i]);
    }
    console.log("end of question 6 ");
        console.log("\n");
    
}








ques6([1,19,24,1,42],[4,54,18,0,21]);