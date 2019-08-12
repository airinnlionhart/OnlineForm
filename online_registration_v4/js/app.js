var i = 0;
var x = 0;
var z =0;
function myFunction(){
  document.getElementById("bar").style.display = "block";
  var percents = ["1","15%", "30%", "45%", "60%", "75%", "98%", "100%"];


a = document.forms['myForm']['fullname'].value;
b = document.forms['myForm']['email'].value;
c = document.forms['myForm']['phoneNumber'].value;
d = document.forms['myForm']['streetNumber'].value;
e = document.forms['myForm']['city'].value;
f = document.forms['myForm']['states'].value;
g = document.forms['myForm']['zip'].value;


if(a == "" ){
 i--;
}
if (b == "") {
i--;
}

if (c == "") {
 i--;
}


if (d == "") {
 i--;
}

if (e == "") {
 i--;
}

 if (f == "Choose State") {
 i--;
}

 if (g == "") {
 i--;
}
i--;
i=(8+i)

console.log(i);

  document.getElementById("bar").style.width = percents[i];
i=0;
}
