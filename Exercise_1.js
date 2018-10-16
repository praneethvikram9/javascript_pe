 function ques1() {
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
    
}
         

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
    //convert int to string and then insert -  in between even digits
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



    console.log("end of question 14:");
    console.log("\n");

}


function ques15(){
    var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
    var jsonObj = JSON.parse(jsonStr);
    console.log(jsonObj);
    console.log("end of question 15");
    console.log("\n");

}

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
       console.log("end of question 16");
       console.log("\n");

}

function ques17(json){
    var article=json.articles;
    for(var i=0;i<article.length;i++){
        delete article[i]["url"];
        delete article[i]["urlToImage"];
        delete article[i]["publishedAt"];
    }
    

    console.log(article);
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
    console.log("\n");
    ques14([{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
    {'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
    {'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
    {'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
    {'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
    {'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}]);

    ques15();
    ques16();
    ques17( {
        "status": "ok",
        "source": "the-next-web",
        "sortBy": "latest",
        "articles": [
         {
        "author": "Bryan Clark",
        "title": "Spotify is using billboards to call users out on their questionable listening habits",
        "description": "In a hilarious new marketing campaign, Spotify is taking to billboards to pose some rather serious questions (and provide commentary) about its users. One of the new billboards, for example, will read: “Dear person who made a playlist called: ‘One Night Stand With Jeb Bush Like He’s a Bond Girl in a European Casino.’ We …",
        "url": "http://thenextweb.com/music/2016/11/30/spotify-is-using-billboards-to-call-users-out-on-their-questionable-listening-habits/",
        "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-5.45.53-PM.png",
        "publishedAt": "2016-11-30T07:38:09Z"
        },
        {
        "author": "Bryan Clark",
        "title": "Man in VR headset falls off fake cliff and hits a very real floor",
        "description": "One day, we’ll have an entire Tumblr account for hilarious VR accidents, but until then, George Takei’s Facebook account will have to do. Takei, the Star Trek alum and current boss of sharing things on Facebook, recently shared a video of a man attempting to conquer a virtual cliff while inside an Oculus headset; it …",
        "url": "http://thenextweb.com/virtual-reality/2016/11/30/man-in-vr-headset-falls-off-fake-cliff-and-hits-a-very-real-floor/",
        "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/man-falling.png",
        "publishedAt": "2016-11-30T00:00:30Z"
        },
         {
        "author": "Napier Lopez",
        "title": "Microsoft's new app tries to fix Android's copy and paste problem",
        "description": "For an OS typically preferred by power-users, Android has an embarrassing amount of trouble with copy and paste. Sometimes it works just fine, but in other apps you can only copy entire huge swaths of text, or worse – nothing at all. Microsoft’s new Clip Layer app wants to fix that by letting you copy …",
        "url": "http://thenextweb.com/apps/2016/11/29/microsofts-new-app-tries-fix-androids-copy-paste-problem/",
        "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Microsoft-Clip-Layer.png",
        "publishedAt": "2016-11-29T22:11:20Z"
        },
         {
        "author": "Bryan Clark",
        "title": "Dueling smart assistants give zero fucks about your calendar",
        "description": "If you’ve ever wondered about the infinite loop one could create by pairing two smart home assistants, it’s this. YouTuber Adam Jakowenko used both an Amazon Echo Dot, and a Google Home device to answer a simple question: “what’s on my calendar for tonight?” Using the Echo first, the device dutifully read off the beginning …",
        "url": "http://thenextweb.com/shareables/2016/11/29/its-like-dividing-by-zero/",
        "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-12.29.12-PM.png",
        "publishedAt": "2016-11-29T21:44:47Z"
        },
         {
        "author": "Bryan Clark",
        "title": "This Chrome extension replaces 'alt-right' with 'white supremacist'",
        "description": "This election season, the term ‘alt-right’ went from relative obscurity to the forefront of our collective conscious in a matter of weeks. Man-sized Oompa-Loompa aside, the real winner in the 2016 election was a term many believe to be synonymous with white supremacy. Call it the politically correct way to say ‘white supremacist’ for a …",
        "url": "http://thenextweb.com/google/2016/11/29/this-chrome-extension-replaces-alt-right-with-white-supremacist/",
        "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/Screen-Shot-2016-11-29-at-10.25.43-AM.png",
        "publishedAt": "2016-11-29T18:40:39Z"
        },
        {
        "author": "Juan Buis",
        "title": "Disney's new animatronic robots are getting too realistic for me",
        "description": "Disney will soon be opening a new Avatar-themed experience in Disneyworld Florida, and its new animatronic robots are ridiculously realistic.",
        "url": "http://thenextweb.com/shareables/2016/11/29/disney-robots/",
        "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/disney.gif",
        "publishedAt": "2016-11-29T16:00:56Z"
        }]
        });