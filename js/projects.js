(function ($) {
	'use strict';

	var projects = {
		"projects": [
			{
				"title": "SPDC",
				"dates": "2009-2011",
				"description": "SynchroPhasor Concentration SubSystem",
				"images": [
					"http://lorempixel.com/197/148/sports/1/"
				]
			},
			{
				"title": "KavPool",
				"dates": "2011-2012",
				"description": "Gas Cavern Simulator in MS Silverlight",
				"images": [
					"http://lorempixel.com/197/148/city/1/",
					"http://lorempixel.com/197/148/city/2/",
				]
			},
			{
				"title": "CSS",
				"dates": "2012",
				"description": "KavPool Enterprise Extension",
				"images": [
					"http://lorempixel.com/197/148/nightlife/1/",
				]
			},
			{
				"title": "Virtualeye",
				"dates": "2012-2013",
				"description": "WindowsPhone & WindowsAzure based application supporting people with sight disabilitites",
				"images": [
					"http://lorempixel.com/197/148/people/1/",
					"http://lorempixel.com/197/148/people/2/",
				]
			},
			{
				"title": "DataFordeler",
				"dates": "2014-Now",
				"description": "NDA",
				"images": [
					"http://lorempixel.com/197/148/sports/3/",
				]
			}
		],
		
		"display": function () {
			var projectsEl = $("#projects");
			projects.projects.forEach(function (project) {
				projectsEl.append(HTMLprojectStart);
				var projectEl = $(".project-entry:last");
				var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
				projectEl.append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
				projectEl.append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
				projectEl.append(formattedDescription);
				
				project.images.forEach(function(image) {
					var formattedImage = HTMLprojectImage.replace("%data%", image);
					projectEl.append(formattedImage);
				});
			});
		}
	};

	projects.display();
})(jQuery);