var display = document.getElementById("display");
var ul = document.getElementById("ul-list");

function addtask(){
    if(display.value === ""){
       alert("Please enter task")
    }

    else{
        var li = document.createElement("li");
        var litext = document.createTextNode(display.value);
        li.setAttribute("class" , "list-s");
        li.appendChild(litext);

     // adding edit button

    var editbtn = document.createElement("button");
    var edittext = document.createElement("i");
    edittext.className = "fa-solid fa-pen-to-square"
    editbtn.appendChild(edittext);
    editbtn.setAttribute("onclick" , "edittask(this)");
    editbtn.setAttribute("class" , "e-btn");
    li.appendChild(editbtn);

     // adding delete button

     var delbtn = document.createElement("button");
     var deltext = document.createElement("i");
     deltext.className = "fa-solid fa-trash"
     delbtn.appendChild(deltext);
     delbtn.setAttribute("onclick" , "deltask(this)");
     delbtn.setAttribute("class" , "d-btn");
     li.appendChild(delbtn);

       
 ul.appendChild(li);
 display.value = ""

    }
}

function deleteall(){
    ul.innerHTML = ""
}


// edit button


function edittask(editbtn){
   var before = editbtn.parentNode.firstChild.nodeValue;
   var after = prompt("Edit your task" , before);
   editbtn.parentNode.firstChild.nodeValue = after
}

// delete button

function deltask(delbtn){

   delbtn.parentNode.remove()

}