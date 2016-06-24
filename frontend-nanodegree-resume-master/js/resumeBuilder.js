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
    "contacts":{
        "location":"Montreal, QC",
        "email":"axelle.sandjong@gmail.com",
        "mobile":"514-225-2288",
        "github":"axelle-kombou",
        "blog":"fun and struggles",
        "twitter":"@axellekombou"
    },
    "skills":["HTML","CSS","Javascript","Python","Twitter Bootstrap","JQuery"],
    "biopic":"images/about.jpg",
    "welcomeMessage":"Hello and welcome to my little corner of the internet. "
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
    var contact = formattedMobile + formattedEmail + formattedTwitter + formattedGithub +formattedBlog+ formattedLocation;
    $("#topContacts").append(contact);
    $("#footerContacts").append(contact);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
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
}
bio.display();

var work={
    "jobs": [
        {
            "employer": "Canadian Imperial Bank of Commerce CIBC",
            "title": "Financial service representative",
            "dates": "july 2013 - Now",
            "description": "This is a phone based position and it involves fulfilling customer’s requests about their banking needs while providing them with some advice on how to improve and expand their financial portfolio. I have the opportunity to advise clients on credit products such as credit card, line of credit, loans as well as investments products such as RRSP and TFSA.",
            "location": "Montreal,Canada"
        },
        {
            "employer": "West Virginia University WVU",
            "title": "Teaching assistant",
            "dates": "Aug.2011-May 2013",
            "description": "I taught French to beginners and intermediate students (French 101&203). My responsibilities included preparing French lessons for students of varying levels of ability, from Beginners to Advanced; evaluating student progress and tailored lessons accordingly; providing additional tutoring to students requiring extra help, assisting with school administration and organizing student social events.",
            "location": " Morgantown, USA"
        }
    ]
};


work.display = function(){
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects = {
    "projects":[
        {
            "title": "Python Quiz",
            "dates": "June 2016",
            "description": "Using the Python language ,I created a fill in the blank quiz with three levels of difficulties and i basically tested the knowledge of the user on python terminology and usage.",
            "images": ["images/quiz1.png", "images/quiz2.png"]
        },

        {
            "title": "HTML and CSS website",
            "dates": "May 2016",
            "description": "Using HTML and CSS, i created a website to recap all the concepts covered during the lesson on HTML and CSS",
            "images": ["images/basicwebsite1.png", "images/basicwebsite2.png"]
        }
        ]
};

projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
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
            "majors": ["TESOL"],
            "url": "www.wvu.edu"
        },
        {
            "name": "West Virginia University",
            "degree": "Bachelor",
            "dates": "2008 to 2011",
            "location": "Morgantown,West Virginia",
            "majors": ["Petroleum Natural Gas Engineering"],
            "url": "www.wvu.edu/pnge"
        }
    ],

    "onlineCourses":[
        {
            "title": "Front End Developer Nanodegree",
            "school": "Udacity",
            "date": "May to July, 2016",
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

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedschoolMajor);

    }

    for (item in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
        var formattedonline = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(formattedonline);
        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].date);
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