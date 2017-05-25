
var bio = {
 	"name": "Dmytro Danko",
 	"role": "JavaScript Developer",
 	"contacts": {
 		"mobile": "+38(096)-37-43-470",
 		"email": "brandnewgarage@gmail.com",
 		"github": "lomm28",
 		"location": "Dnipro City, UA"
 	},
 	"skills": [
 		"web development", "programming", "teaching", "JavaScript"
 		],
 	"welcome": "Hi there! Welcome to my resume page!",
 	"picURL": "images/DSC05570.jpg"
};

var work = {

	"workplaces": [
		{
			"employer": "Murka Ltd",
			"workTitle": "Customer Support Representative",
			"workDates": "February, 2016 - present",
			"location": "Dnipro City, Ukraine",
			"description": "My main objective as a customer care specialist at Murka East Ltd. is to make sure that all players get their issues resolved in a timely manner. I comminucate with customers via email. My responsibilities include but are not limited to answering customers inquiries, checking databases and rectifying issues related to payments and games discrepancies, reporting existing issues to QA team and working with them on a solution, providing help in training new staff."
		},
		{
			"employer": "St. Regis Doha Hotel",
			"workTitle": "Reservations/ Butler Service Desk Specialist",
			"workDates": "January, 2015 - January, 2016",
			"location": "Doha, Qatar",
			"description": "As a butler service desk/reservations agent I was attending to guests' needs, helping guests around the hotle with all the trifles that make staying at a hotel pleasant and relaxing. I was in charge of individual and group reservations, dining reservations. Ensuring first-class and unmatched experience was a must in my job, so living up to guests expectations was the daily foundation of my job."	
		},
		{
			"employer": "ONYX Enterprises Intl.",
			"workTitle": "Technical Support Specialist",
			"workDates": "June, 2011 - July, 2013",
			"location": "Mykolaiv, Ukraine",
			"description": "I was mainly engaged in technical support. My responsibilities were the following: helping customers with issues related to installing automobile parts and accessories, billing questions, shipping and delivery issues. I provided assistance via phone, live chat, email."	
		},
		{
			"employer": "HostingMax",
			"workTitle": "Technical Support Representative",
			"workDates": "September, 2009 - February, 2010",
			"location": "Mykolaiv City, Ukraine",
			"description": "My responsibilities included providing technical support in questions related to settings up email clients and accounts, troubleshooting problems related to hosting, web development and databases (MySQL and MSSQL) maintenance. I provided support via live chat and email."
		}
	]	
};

var education = {

	"university": [
		{
			"est": "Mykolaiv Black Sea National University of Petro Mohyla",		
			"degree": "Master Degree in Foreign languages and literature",
			"attended": "2004-2009",
			"location": "Mykolaiv, Ukraine",
			"major": "Foreign languages"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-End Development Certification",
			"school": "Free Code Camp",
			"dates": "May, 2016- February, 2017",
			"url": "https://www.freecodecamp.com/lomm28/front-end-certification"
		},
		{
			"title": "Asynchronous Programming with JavaScript",
			"school": "Microsoft",
			"dates": "January-March, 2017",
			"url": "https://www.edx.org/course/asynchronous-programming-javascript-microsoft-dev234x-0"
		},
		{
			"title": "Introduction to React.js",
			"school": "Code Academy",
			"dates": "January-April, 2017",
			"url": "https://www.codecademy.com/learn/react-101"
		},
				{
			"title": "JavaScript Programming Patterns",
			"school": "Udacity",
			"dates": "https://www.udacity.com/course/javascript-design-patterns--ud989",
			"url": "April-June, 2017"
		}
	]
};

var projects = {
	"myProjects": [
		{
			"title": "Bodyshop cite",
			"dates": "March, 2016",
			"description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
			"img": "images/bodyshop.jpg"
		},
		{
			"title": "Broker Agency cite",
			"dates": "June-August, 2016",
			"description": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
			"img": "images/axit.jpg",	
		}
 	]
};

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.picURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	var formattedEmail= HTMLemail.replace("%data%", bio.contacts["email"]);
	var github = HTMLgithub.replace("%data%", bio.contacts["github"]);
	var loc = HTMLlocation.replace("%data%", bio.contacts["location"]);

	var skillss = bio.skills;

		$("#header").append(formattedName).append(formattedRole).prepend(formattedBioPic).append(formattedWelcomeMsg).append(HTMLskillsStart);

			for(i = 0; i < skillss.length; i++) {
				$("#header").append("<li>"+ skillss[i]+"</li>");
			}

		$("#topContacts").append(formattedMobile).append(formattedEmail).append(github).append(loc);
		$("#footerContacts").append(formattedMobile).append(formattedEmail).append(github).append(loc);
		
		function displayWork() {
			for (job in work.workplaces) {
				$("#workExperience").append(HTMLworkStart).append(HTMLworkEmployer.replace("%data%", work.workplaces[job]["employer"]) + HTMLworkTitle.replace("%data%", work.workplaces[job]["workTitle"])).append(HTMLworkDates.replace("%data%", work.workplaces[job]["workDates"])).append(HTMLworkLocation.replace("%data%", work.workplaces[job]["location"])).append(HTMLworkDescription.replace("%data%", work.workplaces[job]["description"]));
			};
		};

		projects.display = function() {
			for (project in projects.myProjects) {
				//$("#projects").append(HTMLprojectStart).append(HTMLprojectTitle.replace("%data%", projects.myProjects[project]["title"])).append(HTMLprojectDates.replace("%data%", projects.myProjects[project]["dates"])).append(HTMLprojectDescription.replace("%data%", projects.myProjects[project]["description"])).append(HTMLprojectImage.replace("%data%", projects.myProjects[project]["img"]));
				$("#projects").append(HTMLprojectStart);
				$("#titleGoHere").append(HTMLprojectTitle.replace("%data%", projects.myProjects[project]["title"])).addClass("flex-box");
				$("#datesGoHere").append(HTMLprojectDates.replace("%data%", projects.myProjects[project]["dates"])).addClass("flex-box");
				$("#descriptionGoHere").append(HTMLprojectDescription.replace("%data%", projects.myProjects[project]["description"])).addClass("flex-box").css("margin-top", "-18px");
				$("#projectsGoHere").append(HTMLprojectImage.replace("%data%", projects.myProjects[project]["img"])).addClass("flex-box");
			}
		};

		function displaySVG () {
			var svg = d3.select("svg"),
    			width = +svg.attr("width"),
    			height = +svg.attr("height");

			var format = d3.format(",d");

			var color = d3.scaleOrdinal(d3.schemeCategory20c);

			var pack = d3.pack()
    			.size([width, height])
    			.padding(1.5);

			d3.csv("flare.csv", function(d) {
  				d.value = +d.value;
  				if (d.value) return d;
			}, function(error, classes) {
  				if (error) throw error;

  			var root = d3.hierarchy({children: classes})
      			.sum(function(d) { return d.value; })
      			.each(function(d) {
        			if (id = d.data.id) {
          				var id, i = id.lastIndexOf(".");
          				d.id = id;
          				d.package = id.slice(0, i);
          				d.class = id.slice(i + 1);
        			}
      		});

  			var node = svg.selectAll(".node")
    			.data(pack(root).leaves())
	    		.enter().append("g")
	      		.attr("class", "node")
      			.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  			node.append("circle")
      			.attr("id", function(d) { return d.id; })
      			.attr("r", function(d) { return d.r; })
      			.style("fill", function(d) { return color(d.package); });

  			node.append("clipPath")
      			.attr("id", function(d) { return "clip-" + d.id; })
    			.append("use")
      			.attr("xlink:href", function(d) { return "#" + d.id; });

  			node.append("text")
      			.attr("clip-path", function(d) { return "url(#clip-" + d.id + ")"; })
    			.selectAll("tspan")
    			.data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
    			.enter().append("tspan")
      			.attr("x", 0)
      			.attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
      			.text(function(d) { return d; });

  			node.append("title")
      			.text(function(d) { return d.id + "\n" + format(d.value); });
			});
		}

	var university = HTMLschoolName.replace("%data%", education.university[0]["est"]);
	var degree = HTMLschoolDegree.replace("%data%", education.university[0]["degree"]);
	var yearsStudy = HTMLschoolDates.replace("%data%", education.university[0]["attended"]);
	var loc3 = HTMLschoolLocation.replace("%data%", education.university[0]["location"]);
	var major = HTMLschoolMajor.replace("%data%", education.university[0]["major"]);

	$("#education").append(HTMLschoolStart).append(university + degree).append(yearsStudy).append(loc3).append(major);

	displayWork();
	projects.display();
	displaySVG();

	$("#mapDiv").append(googleMap);