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
	 if (houses[i].valueOf() === houseCode.valueOf()) {

	nearby = [houses[i - 11], houses[i - 10], houses[i - 9], houses[i - 1], houses[i + 1], houses[i + 9], houses[i + 10], houses[i + 11]];

	if (houseCode.endsWith("01")) {

	nearby.splice(0, 1);
	nearby.splice(2, 1);
	nearby.splice(3, 1);

	} else if (houseCode.endsWith("10")) {

	nearby.splice(2, 1);
	nearby.splice(3, 1);
	nearby.splice(5, 1);



	 }

    //The filter method will remove all undefined indices, courtesy of Bill on stackoverflow: https://stackoverflow.com/users/1879895/bill
	console.log(nearby.filter(function(n){ return n != undefined }));

    }

}
};

nearbyHomes("j09");