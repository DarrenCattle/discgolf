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
						length: 240	},
			hole2: {	par: 3,
						length: 186	},
			hole3: {	par: 3,
						length: 291	},
			hole4: {	par: 3,
						length: 375	},
			hole5: {	par: 4,
						length: 585	},
			hole6: {	par: 3,
						length: 231	},
			hole7: {	par: 3,
						length: 216	},
			hole8: {	par: 3,
						length: 312	},
			hole9: {	par: 3,
						length: 219	},
			hole10: {	par: 4,
						length: 498	},
			hole11: {	par: 3,
						length: 393	},
			hole12: {	par: 3,
						length: 321	},
			hole13: {	par: 3,
						length: 228	},
			hole14: {	par: 3,
						length: 213	},
			hole15: {	par: 3,
						length: 204	},
			hole16: {	par: 3,
						length: 207	},
			hole17: {	par: 3,
						length: 297	},
			hole18: {	par: 3,
						length: 222	}},
		location: 'Round Rock',
		picture: 'http://imgur.com/cathollow'
	};
	coursedata["Fat Hollow"] = {
		holes: {
			hole1: {	par: 3,
						length: 240	},
			hole2: {	par: 3,
						length: 186	},
			hole3: {	par: 3,
						length: 291	},
			hole4: {	par: 3,
						length: 375	},
			hole5: {	par: 4,
						length: 585	},
			hole6: {	par: 3,
						length: 231	},
			hole7: {	par: 3,
						length: 216	},
			hole8: {	par: 3,
						length: 312	},
			hole9: {	par: 3,
						length: 219	},
			hole10: {	par: 4,
						length: 498	},
			hole11: {	par: 3,
						length: 393	},
			hole12: {	par: 3,
						length: 321	},
			hole13: {	par: 3,
						length: 228	},
			hole14: {	par: 3,
						length: 213	},
			hole15: {	par: 3,
						length: 204	},
			hole16: {	par: 3,
						length: 207	},
			hole17: {	par: 3,
						length: 297	},
			hole18: {	par: 3,
						length: 222	}},
		location: 'Round Rock',
		picture: 'http://imgur.com/fathollow'
	};
	console.log(coursedata);

	//main array controller with calculate and update functions for graph and table
	app.controller('dgController', function() {

		this.course = "Cat Hollow";
		this.holes = coursedata[this.course].holes;
		console.log(this.holes);

		//push new information through the controller
		this.update = function () {
			this.holes = coursedata["Cat Hollow"].scoresheet;
			this.holelength = coursedata["Cat Hollow"].holelength;
			console.log('update');
		};
		//calculate solar angles using empirical formulae
		this.calculate = function (score) {
			this.update();
		};
	});

})();
	