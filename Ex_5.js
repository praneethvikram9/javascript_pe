
function sort_arr(array){
    var len = array.length;
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j<=len;j++){
            if(array[i]>array[j]){
                var temp =array[j];
                array[j]=array[i];
                array[i]=temp;
            }
        }
    

    }
    return array;

}

//removing duplicates
function ques5(array){
    var len = array.length;
    //console.log(len);
    var result=[];
    var flag=0;
    sort_array = sort_arr(array);
   
    for(i=0;i<len-1;i++){
        if(sort_array[i]!=sort_array[i+1]){
            result.push(sort_array[i]);
        }
    }
    result.push(sort_array[len-1]);
   //sort the array and then remove duplicates
   for(var i=0;i<result.length;i++){
    console.log(result[i]);
}


}










ques5([1,24,2,24,1,45]);