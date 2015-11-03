//angular wrapper from codeschool, not sure if necessary
(function(){

	//initial app instantiation
	var app = angular.module('dgApp', ['angularCharts']);

	//blank object instantiation, future databases
	var database = {};
	var coursedata = {};
	//initial test entry
	coursedata["Cat Hollow"] = {
		holes: {
			hole1: {	par: 3,
						length: 300	},
			hole2: {	par: 3,
						length: 300	},
			hole3: {	par: 3,
						length: 300	},
			hole4: {	par: 3,
						length: 300	},
			hole5: {	par: 3,
						length: 300	},
			hole6: {	par: 3,
						length: 300	},
			hole7: {	par: 3,
						length: 300	},
			hole8: {	par: 3,
						length: 300	},
			hole9: {	par: 3,
						length: 300	},
			hole10: {	par: 3,
						length: 300	},
			hole11: {	par: 3,
						length: 300	},
			hole12: {	par: 3,
						length: 300	},
			hole13: {	par: 3,
						length: 300	},
			hole14: {	par: 3,
						length: 300	},
			hole15: {	par: 3,
						length: 300	},
			hole16: {	par: 3,
						length: 300	},
			hole17: {	par: 3,
						length: 300	},
			hole18: {	par: 3,
						length: 300	}},
		location: 'Round Rock',
		picture: 'http://imgur.com/cathollow'
	};
	console.log(coursedata);

	//main array controller with calculate and update functions for graph and table
	app.controller('dgController', function() {

		this.course = "Cat Hollow"
		this.holes = coursedata[this.course].holes;
		console.log(this.holes);
		console.log('update');

		//push new information through the controller
		this.update = function () {
			this.holes = coursedata["Cat Hollow"].scoresheet;
			this.holelength = coursedata["Cat Hollow"].holelength;
			console.log('update');
		};
		//calculate solar angles using empirical formulae
		this.calculate = function (latitude, day) {
			this.update();
		};
	});

})();
	