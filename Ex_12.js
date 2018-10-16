function ques12(string,char){
    var temp = string.split("");
    temp = temp.sort();
    var len = temp.length;
    var count = 0;
    for(var i=0;i<len;i++){
        if(temp[i]==char){
            count++;
        }
    }
    console.log(" number of times "+char+ " occured in "+string+" is "+count);
    console.log("end of question 12");
    console.log("\n");

}
ques12('gmail.com', 'm');