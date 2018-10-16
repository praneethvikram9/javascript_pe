



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
    

    
}









ques10(student_details = [
        {name: "david",marks: 80},
        {name: "vinoth",marks: 77},
        {name: "divya",marks: 88},
        {name: "ishitha",marks: 95},
        {name: "thomas",marks: 68}
    ]);