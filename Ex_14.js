
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
    var employee_temp = employee;
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j<len;j++){
            if(employee_temp[i].age<=employee_temp[j].age){
                var temp = employee_temp[i];
                employee_temp[i]=employee_temp[j];
                employee_temp[j]=temp;
            }
        }
    }
    for(var i=0;i<len;i++){
        console.log(employee_temp[i]);
    }
    console.log("\n");
    //get the occupations into a list
    //sort based on occupation and then add the occupations into list
    var occ=[];
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j<len;j++){
            if(employee[i].occupation>=employee[j].occupation){
                var temp = employee[i];
                employee[i]=employee[j];
                employee[j]=temp;
            }
        }
    }
    for(i=0;i<len-1;i++){
        if(employee[i].occupation !=employee[i+1].occupation){
            occ.push(employee[i].occupation);
        }
    }
    occ.push(employee[len-1].occupation);
    var person={};
    var temp_array=[];
    for(var i=0;i<occ.length;i++){
        for(var j=0;j<len;j++){
            if(occ[i]==employee[j].occupation){
                temp_array.push(employee[j]);
            }     
        }
        
        person[occ[i]]=temp_array;
        temp_array=[];
    }
    console.log("\n");
    console.log("person details separated with occupations:\n");
    console.log(person);
    console.log("\n");
    //using map to output names

    
   var name_map =employee.map(employee => employee.name);
   console.log("only names :"); 
    console.log(name_map);

}