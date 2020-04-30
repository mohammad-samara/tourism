'use strict'
var budjet = prompt ('enter yor budjet in numbers');
if (budjet>=150) {
    document.write('<h3>' + 'we advide you to assighn for Turkey trip' + '</h3>');
} else {
    if (budjet>=50) {
        document.write('<h3>' + 'we advide you to assighn for aqaba trip' + '</h3>');    
} else {
    if (budjet>=0)
        document.write('<h3>' + 'you are too poor so we will give you a free trip to wadi rum' + '</h3>');    
} else {
    document.write('<h3>' + 'invalid entery , you have lost your chance for greet offers' + '</h3>'); 
};