//Bio Object
var bio = {
    "name": "Sohil Kaushal",
    "role": "Full Stack Web Developer",
    "contacts": {
        "mobile": "828-808-8145",
        "email": "<a href='malito:sohilkaushal@gmail.com'>sohilkaushal@gmail.com</a>",
        "github": "<a href='https://github.com/sohilkaushal'>sohilkaushal</a>",
        "location": "Mohali"
    },
    "welcomeMessage": "The only way to learn a new programming language is writitng programs in it",
    "skills": ["Python", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "NodeJS", "KnockoutJS", "C", "C++"],
    "biopic": "images/profilePic.jpg"
};

//bio display function defined

bio.display = function() {
    var x;
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (x = 0; x < bio.skills.length; x++) {
            $("#skills").append(HTMLskills.replace('%data%', bio.skills[x]));
        }
    }
    for (x = 0; x < formattedContactInfo.length; x++) {
        $("#topContacts").append(formattedContactInfo[x]);
        $("#footerContacts").append(formattedContactInfo[x]);
    }
};

//display function called
bio.display();

//Education Object

var education = {
    "schools": [{
            "name": "Govt. Model Senior Secondary School",
            "location": "Govt. Model Senior Secondary School, Sector-33, Chandigarh",
            "degree": "Senior Secondary School",
            "majors": [
                "PCM"
            ],
            "dates": "2015",
            "url": "www.gmsss33d.chd"
        },
        {
            "name": "Chitkara University",
            "location": "Chitkara University, Village Jhasala, Patiala, Punjab",
            "degree": [
                "B.E."
            ],
            "majors": "Computer Science",
            "dates": "2015-present",
            "url": "www.chitkara.edu.in"
        }
    ],
    "onlineCourses": [{
        "title": "Full Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }]
};

//display function defined

education.display = function() {
    for (var x = 0; x < education.schools.length; x++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[x].name) + HTMLschoolDegree.replace("%data%", education.schools[x].degree), HTMLschoolDates.replace("%data%", education.schools[x].dates), HTMLschoolLocation.replace("%data%", education.schools[x].location), HTMLschoolMajor.replace("%data%", education.schools[x].majors));
    }
    $("#education").append(HTMLonlineClasses);
    for (var courses = 0; courses < education.onlineCourses.length; courses++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school), HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date), HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url).replace("#", education.onlineCourses[courses].url));
    }
};

//display function called
education.display();

//Work Object
var work = {
    'jobs': [{
        "employer": "Chitkara University",
        "title": "Student",
        "dates": "2015-present",
        "location": "Chitkara University, Village Jhasala, Patiala, Punjab",
        "description": "Pursuing my bachelors in CSE here"
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

work.display();

//Projects Object

var projects = {
    "projects": [{
            "title": "Portfolio Website",
            "dates": "2017",
            "description": "A responsive Portfolio Page made by using Bootstrap",
            "images": [
                "images/portfolio.jpg"
            ]
        },
        {
            "title": "Map",
            "dates": "2017",
            "description": "A responsive map of famous areas near me that I made using google's API",
            "images": [
                "images/map.jpg"
            ]
        }
    ]
};

//display function defined

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
};

//display function defined
projects.display();

$("#mapDiv").append(googleMap);
