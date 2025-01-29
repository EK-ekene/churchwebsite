function service() {
        var x=document.getElementById("save");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display= "block";
        }
}

function cancel() {
    var x=document.getElementById("save");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display= "none";
    }
}

function pay() {
    var s=document.getElementById("term");
    
        s.style.visibility = "visible";
    
    var a = document.getElementById("terms");
    a.style.visibility = "hidden";
}

function lea() {
    var s=document.getElementById("term");
    
        s.style.visibility = "hidden";
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

function can() {
    var x=document.getElementById("pay");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display= "none";
    }
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
