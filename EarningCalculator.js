// Salary Calculator 
/* A simple program to calculate daily earnings
*/
function salaryCalc(hrs) {
	var wage = 1000 * hrs; // wage is already fixed since 1000/hr
	if(hrs <= 4) { 
		var tip = 0;	//no overtime earnings if hrs <= 4
	}
	else {
		var exthr = hrs - 4; //number of hrs inputed is used to calculate overtime
		var tip = (200 * exthr); // overtime is at a rate of 200/hr
	}
	
	var earnings = (wage + tip); //total earnings for the day
	return "Employee earnings = " + earnings + " naira."
}
