


function ques8(mail){
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

    if(mail_format.test(mail))
    {
        console.log("correct format");
    }
    else{
        console.log("invalid email address");
    }
}








ques8("new@gmail.com");