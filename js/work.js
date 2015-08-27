// Intentionally in global scope for google maps to work.

var work = {
	"jobs": [
		{
			"employer": "KMD",
			"title": "Senior .NET Developer",
			"dates": "2014-Now",
			"location": "Warsaw, PL",
			"description": "KMD is a leading Danish software company"
		},
		{
			"employer": "7N",
			"title": "Senior .NET Consultant",
			"dates": "2014-Now",
			"location": "Warsaw, PL",
			"description": "7N is a leading Danish IT Consultant Agency"
		},
		{
			"employer": "HP",
			"title": "Middleware Support Engineer",
			"dates": "2013-2014",
			"location": "Warsaw, PL",
			"description": "HP is a world-recognized corporation"
		},
		{
			"employer": "Transition Technologies",
			"title": ".NET Developer",
			"dates": "2009-2013",
			"location": "Warsaw, PL",
			"description": "TT is a medium-sized Polish company delivering software for heavy industry"
		},
	],

	"display": function () {
		var workExpEl = $("#workExperience");

		work.jobs.forEach(function (job) {
			workExpEl.append(HTMLworkStart);
			var workEl = workExpEl.children(".work-entry:last");

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			workEl.append(formattedEmployer + formattedTitle);

			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			workEl.append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			workEl.append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			workEl.append(formattedDescription);
		});
	}
};

work.display();