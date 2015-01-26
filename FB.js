//William Decker
//Jan 26 2015
//chap 2
//prints FIZZ or BUZZ if % by 3 or 5



//first code
	/*for (var i = 0; i < 100; i++) 
		if (i%3 == 0)
			console.log("Fizz");
		else if (i%5 == 0)
			console.log("Buzz");
		else if (i%3 == 0 && i%5 ==0)
			console.log("FizzBuzz");
	*/
//looking at the book solution I see why mine doesn't work and why he put a 
//string line instead of just printing. If I do it this way, it only prints
//Fizz or Buzz but never both because it has already weeded out all the
//%3 and %5. 


	for (var i = 0; i < 100; i++) {
		var outLine = "";
		if (i%3 == 0)
			outLine += "Fizz";
		if (i%5 == 0)
			outLine += "Buzz";
		console.log(outLine);
	}
