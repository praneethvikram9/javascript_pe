 function ques1() {
    
}
         console.log("question : 1");
         var date = new Date();
         var day = date.getDay();
         var cur_hour = date.getHours();
         var cur_min = date.getMinutes();
         var cur_sec=date.getSeconds();
         var day_list=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
         var month = date.getMonth();
         var year = date.getFullYear();
         console.log(month+'/'+date.getDate()+'/'+year);
         console.log("end of question 1 ");

         console.log("\n");
//second question
 function ques2(){
         console.log("question :2");
         var array = [1,9,21,54,42];
    
         var max = array[0];
         for(var i=1;i<array.length;i++){
            
             if(array[i]>=max){
                 max=array[i];
             }
         }
         console.log(max);
         console.log("end of question 2 ");

         console.log("\n");
        }

//third question
function ques3(n){
    console.log("question : 3");
    console.log("enter the number");
    //convert int to string and then insert -  in between even digits
    var prev,next;
    var temp = n.toString();
    const string=[temp[0]];
    
    console.log(temp);
    var len = temp.length;
    for(let i =1;i<len;i++){
        if((temp[i-1]%2==0) && (temp[i]%2==0)){
            string.push("-",temp[i]);
        }
        else{
            string.push(temp[i]);
        }

    }
    console.log(string.join(''));
    console.log("end of question 3 ");
    console.log("\n");

}
//sorting strings in alphabetical order (ascending)
function ques4(array){
    console.log("question:4");
    var len = array.length;
    array=sort_arr(array);
    for(i=0;i<len;i++){
        console.log(array[i]);
    }
    console.log("end of question 4 ");
    console.log("\n");


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
console.log("end of question 5 ");
    console.log("\n");


}

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

function ques7(){
    
}


    ques1();
    ques2();
    ques3(25468);
    ques4(['quick','lazy','new','apple','fox']);
    ques5([1,24,2,24,1,45]);
    ques6([1,19,24,1,42],[4,54,18,0,21]);