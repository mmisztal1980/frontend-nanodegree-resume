// Intentionally in global scope for google maps to work.

var skills =
	[
		".NET",
		"C#",
		"XAML",
		"WPF",
		"Silverlight",
		"Windows Phone",
		"Continous Integration",
		"JS"
	];

var bio = {
	"name": "Maciek",
	"role": "Senior .NET Developer",
	"contacts": {
		"mobile": "48123123132",
		"email": "mmisztal1980@gmail.com",
		"github": "https://github.com/mmisztal1980",
		"twitter": "@mmisztal1980",
		"location": "Warsaw, PL"
	},
	"skills": skills,
	"welcomeMessage": "Hi there!",
	"biopic": "http://2.gravatar.com/avatar/93f58aadda971b1252cc27bb9d45d734?size=500",
	"display": function () {
		var headerEl = $("#header");
		var contactsEl = $("#topContacts");
		var footerContactsEl = $("#footerContacts");
			
		// Header
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
		headerEl.prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		headerEl.prepend(formattedName);
			
		// Contacts
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		contactsEl.append(formattedMobile);
		footerContactsEl.append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		contactsEl.append(formattedEmail);
		footerContactsEl.append(formattedEmail);
		var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		contactsEl.append(formattedtwitter);
		footerContactsEl.append(formattedtwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		contactsEl.append(formattedGithub);
		footerContactsEl.append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		contactsEl.append(formattedLocation);
		footerContactsEl.append(formattedLocation);
			
		// Pic & Welcome MSG
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		headerEl.append(formattedPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		headerEl.append(formattedWelcome);
			
		// Skills
		headerEl.append(HTMLskillsStart);
		bio.skills.forEach(function (skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);

			headerEl.append(formattedSkill);
		});
	}
};

bio.display();