function isSameType(value1, value2) {
  //your js code here
	let a=typeof(value1);
	let b =typeof(value2);
	if(value1==NaN && value2==NaN){
		return true;
	}
	
		return  typeof value1 === typeof value2;
	
}


// do not change the code below.
//let value1 = prompt("Enter Start of the Range.");
//let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

