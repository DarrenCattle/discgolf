//Disc Golf Score Tracker API Demo
//Darren Cattle
//October 26th, 2015

var database = {};
var coursedata = {};

database.put("dcattle", null);

coursedata.put("Cat Hollow", {
	scoresheet: [3,3,3,3,4,3,3,3,3,4,3,3,3,3,3,3,3,3],
	holelength: [300,300,300,300,400,300,300,300,300,400,300,300,300,300,300,300,300,300],
	location: "Round Rock",
	picture: "http://imgur.com/cathollow"
});
displayCourse("Cat Hollow");

function storeRound(name, coursename, score) {

	if(name.length() != score.length() || name==null || score==null) {
		return "invalid";
	}
	if(name.length() == 1) {
		var schema = {
			player: name,
			course: coursename,
			//date: datetime.getDate();
			scoresheet: score
		};
		database.push(schema);
		return displayRound(schema);
	}
	else {
		var multi = "";
		for(var a=0; a<name.length; a++) {
			var schema = {
				player: name,
				course: coursename,
				//date: datetime.getDate();
				scoresheet: score
			};
			database.push(schema);
			multi += displayRound(schema);
		}
		return multi;
	}

};

function displayRound(round) {
	var retstring;
	retstring = 
		"Player: " + round.player + "\n" +
		"Course: " + round.coursename + "\n" +
		"Score: " + round.scoresheet.sum() + "\n" +
		"Par: " + coursedata.get(round.coursename).scoresheet.sum() + "\n";
	return retstring;
};

function displayCourse(coursename) {
	var retstring;
	var course = coursedata.get(coursename);
	retstring = 
		"Course Name: " + coursename + "\n" +
		"Hole Scores: " + course.scoresheet + "\n" +
		"Par: " + course.scoresheet.sum() + "\n" +
		"Hole Lengths: " + course.holelength + "\n" +
		"Total Distance: " + course.holelength.sum() + "\n" +
		"Location: " + course.location + "\n" +
		"Course Map: " + course.picture + "\n";
	return retstring;
};