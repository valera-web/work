"use strict"
var prime = true;
var i,j;

function primality(num) {
    for (i=2; i<(num/2+2); i++) {
        if (i===2) {prime = true;}
        prime = prime && !(num % i == 0);
        if (prime == false) {return prime; break;}
    }

    return prime;
    }

var number = prompt('Put down a number (>=2), please ','');

j=0;
while (!(primality(number))) {
    if (j % 2 == 0)
    {number -= j;}
    else {number += j;}
    j++;
}

if ((primality(number - j)) && (j!=0)) {alert (String(number) + " and " + String(number - j));}
else {alert(number);}



