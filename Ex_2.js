 function ques2(){
         
         var array = [1,9,21,54,42];
    
         var max = array[0];
         for(var i=1;i<array.length;i++){
            
             if(array[i]>=max){
                 max=array[i];
             }
         }
         console.log(max);
        }

ques2();