//Disc Golf Score Tracker API Demo
//Darren Cattle
//October 26th, 2015

var database = {};
var coursedata = {};

coursedata["Cat Hollow"] = {
	scoresheet: [3,3,3,3,4,3,3,3,3,4,3,3,3,3,3,3,3,3],
	holelength: [300,300,300,300,400,300,300,300,300,400,300,300,300,300,300,300,300,300],
	location: "Round Rock",
	picture: "http://imgur.com/cathollow"
};
console.log(displayCourse("Cat Hollow"));
console.log(storeRound(["dcattle", "ridhoq"], "Cat Hollow", 
	[
		[2,2,3,3,4,3,3,3,3,4,1,6,3,3,3,2,3,3],
		[3,3,3,3,4,5,3,2,3,4,3,3,3,3,7,3,3,3]
	]
));

function storeRound(name, coursename, score) {

	if(name.length != score.length || name==null || score==null) {
		return "invalid";
	}
	if(name.length == 1) {
		var schema = {
			player: name[0],
			course: coursename,
			scoresheet: score[0]
		};
		database[name] = schema;
		return displayRound(schema);
	}
	else {
		var multi = "";
		for(var a=0; a<name.length; a++) {
			var schema = {
				player: name[a],
				course: coursename,
				scoresheet: score[a]
			};
			database[name] = schema;
			multi += displayRound(schema) + "\n";
		}
		return multi;
	}

};

function displayRound(round) {
	var retstring;
	var myscore = sum(round.scoresheet);
	var parscore = sum(coursedata[round.course].scoresheet);
	var overunder = myscore-parscore > 0 ? "+" : "";
	retstring = 
		"Player: " + round.player + "\n" +
		"Course: " + round.course + "\n" +
		"Hole Scores: " + round.scoresheet + "\n" +
		"Par: " + parscore + "\n" +
		"Total Score: " + myscore + "\n" +
		"Final Score: " + overunder + (myscore-parscore) + "\n";
	return retstring;
};

function displayCourse(coursename) {
	var retstring;
	var course = coursedata[coursename];
	retstring = 
		"Course Name: " + coursename + "\n" +
		"Hole Scores: " + course.scoresheet + "\n" +
		"Par: " + sum(course.scoresheet) + "\n" +
		"Hole Lengths: " + course.holelength + "\n" +
		"Total Distance: " + sum(course.holelength) + "\n" +
		"Location: " + course.location + "\n" +
		"Course Map: " + course.picture + "\n";
	return retstring;
};

function sum(array) {
	var total = 0;
	for (var a in array) {
		total+=array[a];
	}
	return total;
}