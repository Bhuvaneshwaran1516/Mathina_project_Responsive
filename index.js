function myFunction() {
    var x = document.getElementById("showmenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  var counter=1;
setInterval(function(){
 document.getElementById('radio'+ counter).checked=true;
 counter=counter+1;
 if(counter>5){
     counter=1;
 }
},3000);