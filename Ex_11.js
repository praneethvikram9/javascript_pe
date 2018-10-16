
function ques11(string){
    var len = string.length;
    var temp =string.split("");
    temp = temp.sort();
    temp=temp.join("");
    console.log(temp);
}
ques11("webmaster");