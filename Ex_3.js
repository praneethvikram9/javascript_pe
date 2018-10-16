function ques3(n){
    //convert int to string and then insert -  in between even digits
    var temp = n.toString();
    const string=[temp[0]];
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
}

ques3(25468);