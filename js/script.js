

for(var i = 1; i <= 100; i++) {
   if ((i % 3 == 0) && (i % 5 == 0)){
    document.getElementById('risultato').innerHTML += " FizzBuzz <br>";
   }
   else if (i % 3 == 0) {
    document.getElementById('risultato').innerHTML += " Fizz <br> " ;
   }
   else if (i % 5 == 0) {
    document.getElementById('risultato').innerHTML += "Buzz <br>" ;
   }
   else{
   document.getElementById('risultato').innerHTML += i + "<br>" ;
   }

}





