


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


function search1() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("som6");
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
function search2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("som7");
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
function search3() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("som8");
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
function search4() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("som9");
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
function search5() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("som10");
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
function search6() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("som11");
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


