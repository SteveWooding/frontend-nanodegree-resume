var bio = {
    "name": "Steven Wooding",
    "role": "Full Stack Web Developer",
    "contacts": {
        "mobile": "555-7837",
        "email": "contact@stevenwooding.com",
        "github": "SteveWooding",
        "location": "Southamapton, UK"
    },
    "picURL" : "https://pbs.twimg.com/profile_images/450579964148998144/YdNBeiSD_400x400.png",
    "welcomeMsg" : "Welcome to my CV",
    "skills" : ["Python", "HTML", "CSS", "programming", "CompTIA A+", "CompTIA Network+"]
};

var work = {};
work.title = "Research Scientist";
work.employer = "QinetiQ";
work.dates = "2000 - 2007";
work.location = "Portsmouth, UK";

var education = {
    "schools": [
        {
            "name": "University of Surrey",
            "city": "Guildford",
            "degree": "MPhys",
            "major": ["Phyics"],
            "dates": "1996 - 2000",
            "graduationYear": "2000"
        },
        {
            "name": "Udacity",
            "city": "The Internet",
            "degree": "Nanodegree",
            "major": ["Full Stack Web Developer"],
            "dates": "2015"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2016,
            "url": "https://www.udacity.com/course/ud804"
        }
    ]
};

var projects = {
    "projects": [
        {
            "name": "Movie Trailer Website",
            "dates": "October 2015",
            "description": "Project uses server-side code to dynamically create a website of movies using object-oriented Python. I added the storyline and release date of each movie to the website. I also changed the look of the website to a dark theme.",
            "images": ["https://s3.amazonaws.com/accredible_api_evidence_items/previews/63603/large/1455031635415?1455030907"]
        },
        {
            "name": "Tournament Results",
            "dates": "October 2015",
            "description": "Built a PostgreSQL relational database scheme to store the results of a game tournament. Also provided a number of queries to efficiently report the results of the tournament and determine the winner."
        },
        {
            "name": "Catalog App",
            "dates": "November 2015",
            "description": "Developed a content management system using the Flask framework in Python. Authentication is provided via OAuth and all data is stored within a SQLite database.",
            "images": ["https://s3.amazonaws.com/accredible_api_evidence_items/previews/83003/large/1455022824535?1455022739"]
        },
        {
            "name": "Conference Organization App",
            "dates": "December 2015",
            "description": "Using Google App Engine's Endpoints API, built the Python backend to support a web- and Android-based conference organization application.",
            "images": ["https://s3.amazonaws.com/accredible_api_evidence_items/previews/86736/large/1455028564751?1455028498"]
        },
        {
            "name": "Linux Server Configuration",
            "dates": "December 2015",
            "description": "Installed and configured all required software to turn a baseline Ubuntu Amazon Web Services server into a fully functional web application server, including Apache Web Server and PostgreSQL database server."
        }
    ]
};


$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.picURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%", bio.skills));

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(work["position"]);

$("#education").append(HTMLschoolStart);
$("#education").append(education.name);