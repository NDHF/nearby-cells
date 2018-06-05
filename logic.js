//A program that will find all nearby squares in a grid.

var houses = 
[
"a01", "a02", "a03", "a04", "a05", "a06", "a07", "a08", "a09", "a10",
"b01", "b02", "b03", "b04", "b05", "b06", "b07", "b08", "b09", "b10",
"c01", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10",
"d01", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10",
"e01", "e02", "e03", "e04", "e05", "e06", "e07", "e08", "e09", "e10",
"f01", "f02", "f03", "f04", "f05", "f06", "f07", "f08", "f09", "f10",
"g01", "g02", "g03", "g04", "g05", "g06", "g07", "g08", "g09", "g10",
"h01", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10",
"i01", "i02", "i03", "i04", "i05", "i06", "i07", "i08", "i09", "i10",
"j01", "j02", "j03", "j04", "j05", "j06", "j07", "j08", "j09", "j10"
];

var nearby = [];

function nearbyHomes(houseCode) {
	for (i = 0; i <= houses.length; i++) {
	 // Compare user-submitted string against strings in the array
	 if (houses[i].valueOf() === houseCode) {
		 //This array will contain all cells in the grid within one cell of the original
		 //This part could be simplified and made reusable:
		 //There should be a way to have the nearbyHomes function take the height 
		 //and width of the grid as agruments, build the array, and know what to remove from it,
		 //based on these values.
	 nearby = [houses[i - 11], houses[i - 10], houses[i - 9], houses[i - 1], houses[i + 1], 
	 	houses[i + 9], houses[i + 10], houses[i + 11]];
	  //This will handle all strings along the left-hand side of the grid, 
	  //splicing out returned indices on the opposite side of the page
	  if (houseCode.endsWith("01")) {
	  nearby.splice(0, 1);
	  nearby.splice(2, 1);
	  nearby.splice(3, 1);
          //This will do the same as the above if-statement, for the right-hand side 
     	} else if (houseCode.endsWith("10")) {		
	    nearby.splice(2, 1);
	    nearby.splice(3, 1);
	    nearby.splice(5, 1);
	 }
	//The filter method here will remove all undefined indices. Filter function
	//courtesy of Bill on stackoverflow: https://stackoverflow.com/users/1879895/bill
	console.log(nearby.filter(function(n){ return n != undefined }));
    }
	}
};

nearbyHomes("j09");