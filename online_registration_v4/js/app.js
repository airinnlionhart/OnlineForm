var i = 0;

function myFunction(){
  document.getElementById("bar").style.display = "block";
  var percents = ["15%","30%","45%","60%","75%","90%","100%"];
  document.getElementById("bar").style.width = percents[i] ;
  i++;
}
