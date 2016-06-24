/*
This is empty on purpose! Your code to build the resume will go here.

var awesomeThoughts = "I am axelle and I am awesome!";
var funThoughts=
    awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts);
console.log(awesomeThoughts);
var email="axylove2001@yahoo.fr";
var newEmail=
    email.replace("yahoo","gmail");
console.log(email);
console.log(newEmail);
    */


var bio={
    "name": "Axelle Kombou",
    "role":"Front-end Web developer",
    "contact":{
        "location":"Montreal, QC",
        "email":"axelle.sandjong@gmail.com",
        "mobile":"514-225-2288",
        "github":"axelle-kombou",
        "twitter":"@axellekombou"
    },
    "skills":["HTML","CSS","Javascript","Python","Twitter Bootstrap","JQuery"],
    "picture":"images/about.jpg",
    "welcomeMessage":"Hello and welcome to my little corner of the internet. "
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedTwitter=HTMLtwitter.replace("%data%",bio.contact.twitter);
var formattedGithub=HTMLgithub.replace("%data%",bio.contact.github);
var contact = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;
var formattedPic=HTMLbioPic.replace("%data%",bio.picture);
var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(contact);
$("#footerContacts").append(contact);
$("#header").append(formattedPic);
$("#header").append(formattedMessage);

if (bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[4]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[5]);
    $("#skills").append(formattedSkill);

}


var work={
    "jobs": [
        {
            "Employer": "Canadian Imperial Bank of Commerce CIBC",
            "Title": "Financial service representative",
            "Dates": "july 2013 - Now",
            "Description": "This is a phone based position and it involves fulfilling customer’s requests about their banking needs while providing them with some advice on how to improve and expand their financial portfolio. I have the opportunity to advise clients on credit products such as credit card, line of credit, loans as well as investments products such as RRSP and TFSA.",
            "Location": "Montreal,Canada"
        },
        {
            "Employer": "West Virginia University WVU",
            "Title": "Teaching assistant",
            "Dates": "Aug.2011-May 2013",
            "Description": "I taught French to beginners and intermediate students (French 101&203). My responsibilities included preparing French lessons for students of varying levels of ability, from Beginners to Advanced; evaluating student progress and tailored lessons accordingly; providing additional tutoring to students requiring extra help, assisting with school administration and organizing student social events.",
            "Location": " Morgantown, USA"
        }
    ]
};


work.display = function(){
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].Location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects = {
    "projects":[
        {
            "Title": "Python Quiz",
            "Dates": "June 2016",
            "Description": "Using the Python language ,I created a fill in the blank quiz with three levels of difficulties and i basically tested the knowledge of the user on python terminology and usage.",
            "images": ["images/quiz1.png", "images/quiz2.png"]
        },

        {
            "Title": "HTML and CSS website",
            "Dates": "May 2016",
            "Description": "Using HTML and CSS, i created a website to recap all the concepts covered during the lesson on HTML and CSS",
            "images": ["images/basicwebsite1.png", "images/basicwebsite2.png"]
        }
        ]
};

projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].Title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].Dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].Description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.projects[project].images.length>0){
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }


    }
};
projects.display();



var education= {
    "schools": [
        {
            "name": "West Virginia University",
            "degree": "Masters",
            "dates": "2011 to 2013",
            "location": "Morgantown,West Virginia",
            "major": ["TESOL"],
            "url": "www.wvu.edu"
        },
        {
            "name": "West Virginia University",
            "degree": "Bachelor",
            "dates": "2008 to 2011",
            "location": "Morgantown,West Virginia",
            "major": ["Petroleum Natural Gas Engineering"],
            "url": "www.wvu.edu/pnge"
        }
    ],

    "onlineCourses":[
        {
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "dates": "May to July, 2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};


education.display= function(){

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschool = formattedschoolName + formattedschoolDegree;
        $(".education-entry-entry:last").append(formattedschool);

        var formattedschoolDates = HTMLworkDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);

    }

    for (item in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
        var formattedonline = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonline);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
        $(".education-entry:last").append(formattedonlineURL);

    }
};
education.display();

function displayMap(){
    $("#mapDiv").append(googleMap);
}
displayMap();