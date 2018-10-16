

//sorting strings in alphabetical order (ascending)
function ques4(array){
    var len = array.length;
    array=sort_arr(array);
    for(i=0;i<len;i++){
        console.log(array[i]);
    }


}
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












ques4(['quick','lazy','new','apple','fox']);