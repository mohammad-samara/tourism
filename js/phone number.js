'use strict'

var phonenumber = prompt ('enter your phone number');

function orderPhone () {

while ( ! (phonenumber > 0 ) ) {
   
   var phonenumber = prompt ('enter your phone number');
}

document.write('<h4>' + 'we will contact you on ' + phonenumber + '</h4>');

}
orderPhone();
