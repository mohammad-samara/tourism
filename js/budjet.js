'use strict'

var budjet1 = prompt('enter yor budjet in numbers');
while (  !((budjet1 > 0 ) || (budjet1 < 0 )) ) {
   
    var budjet1 = prompt ('enter your budjet in numbers');
 }
budjet1 = (budjet1 / 10) ;
//function money(){

//if (budjet1 >= 150) {
  //  document.write('<h3>' + 'we advide you to assighn for Turkey trip' + '</h3>');
//}
//    if (budjet1 >= 50 && budjet1<150) {
//        document.write('<h3>' + 'we advide you to assighn for aqaba trip' + '</h3>');
//    }
//        if (budjet1 >= 0 && budjet1<50)
//            document.write('<h3>' + 'you are too poor so we will give you a free trip to wadi rum' + '</h3>');
//     else {
//         if (budjet1<0) {
//            document.write('<h3>' + 'invalid entery , you have lost your chance for greet offers' + '</h3>');  
//         }      
//    } 
//}

//money () ;
function money(){
for (var i = 0; i < budjet1; i++) {
    document.write('<img src="https://lh3.googleusercontent.com/proxy/2u9G1eCXhOLIW6Yfj9WTpLHjMTpqvsbG04IkdpQBXbFwAeplkAf0tVItIJNGzb2lxaQhkNq1BYyvgb6KEUsOZHwmlvIJmlUw_iQLDfoP-e2ugA8eVHJdt_7lcRklkV6_g5ikD8y9OUn2NArwEZL8tE9NpGZ3-ILSdRErlb7X_JMfatkBzrvRL0RMe9j9a0n7HxyLUOeOAFASI14">')
 //document.write('<h3>' + "lol" + '</h3>') ;  
}
}

money () ;
//function status(){

//var confirm1 = confirm("are you doing good today?");

//if (!confirm1) {
//    alert("i hope you get better");
//} else {
//    alert("thats great");
//}
//}
//status();

