'use strict'
function money(){
var budjet1 = prompt('enter yor budjet in numbers');

if (budjet1 >= 150) {
    document.write('<h3>' + 'we advide you to assighn for Turkey trip' + '</h3>');
}
    if (budjet1 >= 50 && budjet1<150) {
        document.write('<h3>' + 'we advide you to assighn for aqaba trip' + '</h3>');
    }
        if (budjet1 >= 0 && budjet1<50)
            document.write('<h3>' + 'you are too poor so we will give you a free trip to wadi rum' + '</h3>');
     else {
         if (budjet1<0) {
            document.write('<h3>' + 'invalid entery , you have lost your chance for greet offers' + '</h3>');  
         }
        
    } ;
}

function status(){

var confirm1 = confirm("are you doing good today?");

if (!confirm1) {
    alert("i hope you get better");
} else {
    alert("thats great");
}
}

money();
status();