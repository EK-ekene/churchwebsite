function news() {
  var b= document.getElementById("tre");
  b.style.color="white";
  b.style.backgroundColor="#09152e";
  
  var v= document.getElementById("tree");
  v.style.color="black";
  v.style.backgroundColor="white";
  

}
function man() {
  var v= document.getElementById("tree");
  v.style.color="white";
  v.style.backgroundColor="#09152e";
  
  var b= document.getElementById("tre");
  b.style.color="black";
  b.style.backgroundColor="white";
  
}


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("row");
    li = ul.getElementsByTagName("details");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("summary")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  function mySister() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("men");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  function myFunct() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySea");
    filter = input.value.toUpperCase();
    ul = document.getElementById("meet");
    li = ul.getElementsByTagName("details");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("summary")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
 
  function mySis() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySea");
    filter = input.value.toUpperCase();
    ul = document.getElementById("eat");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


function speak() {
    var x=document.getElementById("row");
    if (x.style.display === "block") {
        x.style.display = "block";
    } else {
        x.style.display= "block";
    }

    var z =document.getElementById("talk");
    z.style.display="none";
}



function talk() {
    var z =document.getElementById("talk");
    if (z.style.display === "block") {
        z.style.display = "block";
    } else {
        z.style.display= "block";
    }
    var x=document.getElementById("row");
   x.style.display= "none";
   
}





window.onload = function () {
  var b= document.getElementById("tre");
  b.style.color="white";
  b.style.backgroundColor="#09152e";
}


function pays() {
  var s=document.getElementById("terms");
  
      s.style.visibility = "visible";
 
  var a = document.getElementById("term");
  a.style.visibility = "hidden";
}
function led() {
  var s=document.getElementById("terms");
  
      s.style.visibility = "hidden";
}
function side() {
  var p=document.getElementById("bar");
  if (p.style.display === "block") {
      p.style.display = "none";
    } else {
      p.style.display = "block";
    }
}

function deal() {
  var pol=document.getElementById("meds");
  if (pol.style.display === "block") {
      pol.style.display = "none";
  } else {
      pol.style.display = "block";
  }
}


function media() {
  var s=document.getElementById("med");
  if (s.style.display === "block") {
      s.style.display = "none";
  } else {
      s.style.display= "block";
  }
}

