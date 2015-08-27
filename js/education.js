(function ($) {
	'use strict';

	var education = {
		"schools": [
			{
				"name": "Warsaw Polytechnica",
				"location": "Warsaw, PL",
				"degree": "MSC",
				"majors": "Mechanics & Machine Design",
				"dates": 2010,
				"url": "http://meil.pw.edu.pl"
			}
		],
		"courses": [
			{
				"title": "Udacity FrontEnd Development Nanodegree",
				"school": "Udacity",
				"dates": 2015,
				"url": "http://www.udacity.com"
			}
		],
		"display": function () {
			var eduEl = $("#education");

			education.schools.forEach(function (school) {
				eduEl.append(HTMLschoolStart);
				var schoolEl = $("#education").children(".education-entry:last");

				var formattedName = HTMLschoolName.replace("%data%", school.name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
				schoolEl.append(formattedName + formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
				schoolEl.append(formattedDates);

				var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
				schoolEl.append(formattedLocation);

				var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
				schoolEl.append(formattedMajor);
			});

			$("#education").append(HTMLonlineClasses);
			education.courses.forEach(function (course) {
				eduEl.append(HTMLschoolStart);
				var schoolEl = $("#education").children(".education-entry:last");


				var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
				var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
				schoolEl.append(formattedTitle + formattedSchool);

				var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
				schoolEl.append(formattedDates);

				var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
				schoolEl.append(formattedUrl);
			});
		}
	};

	education.display();
})(jQuery);