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
    var library =  [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 12548},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
        { author: 'Suzanne', title: 'Mockingjay:  Hunger Games', libraryID: 3}
        ];
        var len = library.length
        for(var i=0;i<len-1;i++){
            for(var j=i+1;j<len;j++){
                if(library[i].libraryID>library[j].libraryID){
                    var temp =library[j];
                    library[j]=library[i];
                    library[i]=temp;
                }
            }
        
    
        }

console.log("sorted library based on id");
for(var i=0;i<library.length;i++){
    console.log(library[i]);
}

console.log("end of question 7");
console.log("\n");

}
//checking email pattern
function ques8(mail){
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

    if(mail_format.test(mail))
    {
        console.log("correct format");
    }
    else{
        console.log("invalid email address");
    }
    console.log("end of question 8");
    console.log("\n");
}

function ques9(){
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
        var properties = Object.keys(student);
        console.log(properties);
        console.log("end of question 9");
    console.log("\n");

}

function ques10(student_details){
    var len = student_details.length;
    var sum = 0;
    for(var i=0;i<len;i++){
        sum = sum+student_details[i].marks;
    }
    var avg = sum/len;
    console.log("average:"+avg.toFixed(3));
    
    for(var i=0;i<len;i++){
        if(student_details[i].marks<0 || student_details[i].marks>100){
            console.log("error in the given marks");
        }
        if(student_details[i].marks<60){
            student_details[i].grade="F";
        }
        else if(student_details[i].marks>=60&&student_details[i].marks<70){
          student_details[i].grade="D";  
        }
        else if(student_details[i].marks>=70&&student_details[i].marks<80){
            student_details[i].grade="C";
        }
        else if(student_details[i].marks>=80&&student_details[i].marks<90){
            student_details[i].grade="B";
        }
        else{
            student_details[i].grade="A";
        }
    }

    for(var i=0;i<student_details.length;i++){
        console.log(student_details[i]);
    }
    console.log("end of question 10");
    console.log("\n");

    
}
//string characters in alphabetical order
function ques11(string){
    var len = string.length;
    var temp =string.split("");
    temp = temp.sort();
    temp=temp.join("");
    console.log(temp);
    console.log("end of question 11");
    console.log("\n");

}

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
//flatten an array
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

function  ques14(employee){

    //displaying only programmers
    var len = employee.length;
    for(var i=0;i<len;i++){
        if(employee[i].occupation=="Programmer"){
            console.log(employee[i]);
        }
    }
    console.log("\n");
    //sorting based on age
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j<len;j++){
            if(employee[i].age<=employee[j].age){
                var temp = employee[i];
                employee[i]=employee[j];
                employee[j]=temp;
            }
        }
    }
    for(var i=0;i<len;i++){
        console.log(employee[i]);
    }

    



    console.log("end of question 14:");
    console.log("\n");

}





    ques1();
    ques2();
    ques3(25468);
    ques4(['quick','lazy','new','apple','fox']);
    ques5([1,24,2,24,1,45]);
    ques6([1,19,24,1,42],[4,54,18,0,21]);
    ques7();
    ques8("new@gmail.com");
    ques9();
    ques10(student_details = [
        {name: "david",marks: 80},
        {name: "vinoth",marks: 77},
        {name: "divya",marks: 88},
        {name: "ishitha",marks: 95},
        {name: "thomas",marks: 68}
    ]);
    ques11("webmaster");
    ques12('gmail.com', 'm');
    var result = ques13([5,[22],[[14]],[[4]],[5,6]]);
    console.log(result);
    ques14([{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
    {'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
    {'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
    {'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
    {'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
    {'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}]);