
// while (true) {
//     if (r==0) {
//      //   var aa = document.getElementById("content").value;
//        var aa=r;
//     } 
//      else if (r==1) {
//      // var aa = document.getElementById("content01").value;
//      var aa=r;
//   } 
//      else if (r==2) {
//      // var aa = document.getElementById("content02").value;
//      var aa=r;
//   } else{
//        window.alert("soming went worng")
//   }
// }
function nam() {

     var name = document.getElementById("name").value;
     document.getElementsByClassName("c_name")[r].innerHTML = name;
}
function mon() {
     var mobil = document.getElementById("mob").value;
     document.getElementsByClassName("c_mobile")[r].innerHTML = mobil;
}
function addrr() {
     var addr = document.getElementById("add").value;
     document.getElementsByClassName("c_add")[0].innerHTML = addr;
}
function ema() {
     var em = document.getElementById("email").value;
     document.getElementsByClassName("c_email")[0].innerHTML = em;
}

//     PERSONAL INFO END 

//     EDUCATION START 


function sub001() {
     var em = document.getElementById("sub01").value;
     document.getElementsByClassName("C_sub01")[0].innerHTML = em;
}

function scl001() {
     var emd = document.getElementById("scl01").value;
     document.getElementsByClassName("C_scl01")[0].innerHTML = emd;
}

function per001() {
     var persen = document.getElementById("per01").value;
     document.getElementsByClassName("C_per01")[0].innerHTML = persen;
}

function ad001() {
     var persen = document.getElementById("ad01").value;
     document.getElementsByClassName("C_ad01")[0].innerHTML = persen;
}
function yr001() {
     var persen = document.getElementById("yr01").value;
     document.getElementsByClassName("C_yr01")[0].innerHTML = persen;
}
//  HIGER SECFONDARY INFO
function scl002() {
     var em = document.getElementById("scl02").value;
     document.getElementsByClassName("C_scl02")[0].innerHTML = em;
}

function sub002() {
     var em = document.getElementById("sub02").value;
     document.getElementsByClassName("C_sub02")[0].innerHTML = em;
}

function per002() {
     var persen = document.getElementById("per02").value;
     document.getElementsByClassName("C_per02")[0].innerHTML = persen;
}

function ad002() {
     var persen = document.getElementById("ad02").value;
     document.getElementsByClassName("C_ad02")[0].innerHTML = persen;
}
function yr002() {
     var persen = document.getElementById("yr02").value;
     document.getElementsByClassName("C_yr02")[0].innerHTML = persen;
}

//     GRADUATION INFO 
function scl003() {
     var em = document.getElementById("scl03").value;
     document.getElementsByClassName("C_scl03")[0].innerHTML = em;
}

function sub003() {
     var emp = document.getElementById("sub03").value;
     document.getElementsByClassName("C_sub03")[0].innerHTML = emp;
}

function per003() {
     var persen = document.getElementById("per03").value;
     document.getElementsByClassName("C_per03")[0].innerHTML = persen;
}

function ad003() {
     var persen = document.getElementById("ad03").value;
     document.getElementsByClassName("C_ad03")[0].innerHTML = persen;
}
function yr003() {
     var persen = document.getElementById("yr03").value;
     document.getElementsByClassName("C_yr03")[0].innerHTML = persen;
}

// SKILL INFO 

function ski0() {
     var skill = document.getElementById("ski00").value;
     document.getElementsByClassName("C_ski00")[0].innerHTML = skill;
}

function ski1() {
     var skill = document.getElementById("ski01").value;
     document.getElementsByClassName("C_ski01")[0].innerHTML = skill;
}

function ski2() {
     var skill = document.getElementById("ski02").value;
     document.getElementsByClassName("C_ski02")[0].innerHTML = skill;
}

function ski3() {
     var skill = document.getElementById("ski03").value;
     document.getElementsByClassName("C_ski03")[0].innerHTML = skill;
}

// EXPERIENCE INFO 
function com01() {
     var skill = document.getElementById("com").value;
     document.getElementsByClassName("C_com")[0].innerHTML = skill;
}

function pos01() {
     var skill = document.getElementById("pos").value;
     document.getElementsByClassName("C_pos")[0].innerHTML = skill;
}

function loc01() {
     var skill = document.getElementById("loc").value;
     document.getElementsByClassName("C_loc")[0].innerHTML = skill;
}

function exp01() {
     var skill = document.getElementById("exp").value;
     document.getElementsByClassName("C_exp")[0].innerHTML = skill;
}

//     DISPLAY RESUME 
function hide01() {
     document.getElementById("content").style.display = "none";
     document.getElementById("content01").style.display = "none";
     document.getElementById("content02").style.display = "block";
     var rr=document.getElementById("content").value=0;
     var r = rr;
     window.alert(r);

     // var r = 0;
}

function hide02() {
     document.getElementById("content").style.display = "block";
     document.getElementById("content01").style.display = "none";
     document.getElementById("content02").style.display = "none";
     var rr=document.getElementById("content").value=1;
     var r = rr;
     window.alert(r);
}

function hide03() {
     document.getElementById("content").style.display = "none";
     document.getElementById("content01").style.display = "block";
     document.getElementById("content02").style.display = "none";
     var rr=document.getElementById("content01").value=2;
     var r = rr;
     window.alert(r);

     // var r = 2;
}

function cross01() {
     document.getElementById("cont01").style.display = "none";
     document.getElementById("res01").style.display = "none";
     document.getElementById("plus01").style.display = "block";
     document.getElementById("ter01").style.display = "block";
     document.getElementById("ter01").innerHTML = "when you required tersiary plz click show button"
}

function show01() {
     document.getElementById("cont01").style.display = "block";
     document.getElementById("res01").style.display = "block";
     document.getElementById("plus01").style.display = "none";
     document.getElementById("ter01").style.display = "none";
}


function cross02() {
     document.getElementById("cont02").style.display = "none";
     document.getElementById("res02").style.display = "none";
     document.getElementById("plus02").style.display = "block";
     document.getElementById("sec02").style.display = "block";
     document.getElementById("sec02").innerHTML = "when you required secondary plz click show button"
}
function show02() {
     document.getElementById("cont02").style.display = "block";
     document.getElementById("res02").style.display = "block";
     document.getElementById("plus02").style.display = "none";
     document.getElementById("sec02").style.display = "none";
}

function cross03() {
     document.getElementById("cont03").style.display = "none";
     document.getElementById("res03").style.display = "none";
     document.getElementById("plus03").style.display = "block";
     document.getElementById("grad03").style.display = "block";
     document.getElementById("grad03").innerHTML = "when you required graduation plz click show button"
}

function show03() {
     document.getElementById("plus03").style.display = "none";
     document.getElementById("res03").style.display = "block";
     document.getElementById("cont03").style.display = "block";
     document.getElementById("grad03").style.display = "none";
}

function cross04() {
     document.getElementById("res04").style.display = "none";
     document.getElementById("skill").style.display = "none";
     document.getElementById("plus04").style.display = "block";
     document.getElementById("we01").style.display = "block";
     document.getElementById("we01").innerHTML = "when you required work experiense plz click show button"

}
function show04() {
     document.getElementById("res04").style.display = "block";
     document.getElementById("work01").style.display = "block";
     document.getElementById("plus04").style.display = "none";
     document.getElementById("we01").style.display = "none";
}

function cross05() {
     document.getElementById("res05").style.display = "none";
     document.getElementById("skill").style.display = "none";
     document.getElementById("plus05").style.display = "block";
     document.getElementById("skill01").style.display = "block";
     document.getElementById("skill01").innerHTML = "when you required skills plz click show button";
}
function show05() {
     document.getElementById("res05").style.display = "block";
     document.getElementById("skill").style.display = "block";
     document.getElementById("plus05").style.display = "none";
     document.getElementById("skill01").style.display = "none";
}



function validateform() {
     var name = document.myform.name.value;
     var mobii = document.myform.mobi.value;
     var add = document.myform.addr.value;
     var email = document.myform.email.value;
     var p01 = document.myform.pp01.value;
     var p02 = document.myform.pp02.value;
     var p03 = document.myform.pp03.value;


     if (name == null || name == "") {
          alert("Name can't be blank");
          
          if (name!= null) {
               var nn=name;
               var regEx = /^[a-z][a-z\s]*$/;
               if(nn.match(regEx))
               {
                    return false;
               }
               else
               {
                    alert("Please enter letters and space only.");
                    return false;
               }
          }
          return false;
     }
     
     else if (mobii.length != 10) {
          alert("mobile number must be at least 10 characters long.");
          return false;
     }
     
     else if (isNaN(mobii)) {
          alert("Enter only valid mobile number");
          return false;
     }

     else if (add == "" || add == null) {
          alert("plzz enter your home address");
          return false;
     }

     else if (email == "" || email == null) {
          alert("plzz enter your email address");
          return false;
     }

     else if (isNaN(p01)) {
          alert("enter only valid persentage for 10th");
          return false;
     }

     else if (isNaN(p02)) {
          alert("Enter only valid persentage for 12th");
          return false;
     }

     else if (isNaN(p03)) {
          alert("enter only valid persentage for graduation");
          return false;
     }

     // else if (p01.length != 2) {
     //      alert("persentage must be at least 2 numbers long.");
     //      return false;
     // }
     
     // else if(p02.length!=2) {          
     //        alert("persentage must be at least 2 numbers long.");  
     //        return false;  
     //       }  

     //  else if(p03.length!=2) {          
     //           alert("persentage must be at least 2 numbers long.");  
     //           return false;  
     //       }      
     

}


