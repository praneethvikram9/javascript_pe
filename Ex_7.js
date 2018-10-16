
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

}

ques7();