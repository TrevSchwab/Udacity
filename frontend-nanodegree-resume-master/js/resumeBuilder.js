/*var awesomeThoughts =
	"My name is Trevor and I am AWESOME!";
var funThoughts =
	awesomeThoughts.replace("AWESOME!", "FUN");
$("#main").append(funThoughts);*/

var name = "Trevor Schwab";
var formattedName =
	HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole =
	HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"contacts": {
		"mobile": "608 512 6684",
		"email": "trevschwab@gmail.com",
		"github": "trevschwab",
		"twitter": "@trevorschwab",
		"location": "Madison, WI"
},
	"welcomeMessage": "Welcome to my resume.",
	"skills": ["HTML", " CSS", " Javascript"],
	"bioPic": "images/fry.jpg"
};

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").prepend(formattedBioPic);
