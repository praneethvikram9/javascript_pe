function ques1() {
    var date = new Date();
    var day = date.getDay();
    var cur_hour = date.getHours();
    var cur_min = date.getMinutes();
    var cur_sec=date.getSeconds();
    var day_list=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var month = date.getMonth();
    var year = date.getFullYear();
    console.log(month+'/'+date.getDate()+'/'+year);    
}

ques1();