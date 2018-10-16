function ques16(){
    var obj = {
        "One":"1",
        "Two":"2",
        "Three":"3",
        "Four":"4"
        }
       var result = [];
       for(var key in obj){
           if(obj.hasOwnProperty(key)){
               result.push(obj[key]);
           }
       }
       console.log(result);

}

ques16();