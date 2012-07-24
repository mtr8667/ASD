create database
$.couch.db("mydb").create({
    success: function(data) {
        console.log(data);
    },
    error: function(status) {
        console.log(status);
    }
});


$("home").live("pageshow", function() {
	$couch.db("asdproject").view("app/projects", {
		success: function(data) {
			console.log(data);
		}
	});
});	

}

{
    "name": "asdproject",
    "description": "asdproject"
}

{
  "env": {
    "local": {
      "db": "http://127.0.0.1:5984/asdproject"
    },
        "cloudant": {
      "db": "https://mtr8667:surfnut1@mtr8667.cloudant.com/asdproject"
    }
  }
}
$("#home").live("pageshow", function() {
	$.couch.db("asdproject").view("app/projects", {
		success: function(data) {
			console.log(data);
			$("#dataHolder").empty();
			$.each(data.rows, function(index, value){
				var item = (value.value || value.doc);
				$("#dataHolder").append(
					$("<li>").append(
							$("<a>")
								.attr("href", "jobs.html?job=" + item.projectType ) 
								.text(item.projectName)
					)
						
				);
			});
			$("#dataHolder").listview("refresh");
		}
	}); // this would need another }); to close $("#home).live
$('#additions').on('pageinit', function () {   
	$("#additionsList").empty();
		$.ajax({
	    	"url": 		"_view/additions",
	    	"dataType":	"json",
	    	"success": function(data) {
	    		console.log(data);
	    		
	    		$.each(data.rows, function(index, addition){
//	    			var projectType = addition.value.projectType;
	    			var projectName = addition.value.projectName;
	    	    	var firstName = addition.value.firstName;
	    	    	var lastName = addition.value.lastName;
	    	    	var email = addition.value.email;
	    	    	var phone = addition.value.phone;
	    	    	var emailBest = addition.value.emailBest;
	    	    	var cost = addition.value.cost;
	    	    	var priority = addition.value.priority;
	    	    	var startDate = addition.value.startDate;
	    	    	var jobNotes = addition.value.jobNotes;

	    	    		$("#additionsList").append(
	    	    				$("<li>").attr("data-role", 
	    	    						"collapsible").attr("data-collapsed", "true")
	    	    						.append($("<h3>").text(projectName))
	    	    						.append($("<p>").text(firstName))
	    	    						.append($("<p>").text(lastName))
	    	    						.append($("<p>").text(email))
	    	    						.append($("<p>").text(phone))
	    	    						.append($("<p>").text(emailBest))
	    	    						.append($("<p>").text(cost))
	    	    						.append($("<p>").text(priority))
	    	    						.append($("<p>").text(startDate))
	    	    						.append($("<p>").text(jobNotes))
	    	    				);
	    		});
	    		$("#additionsList").listview("refresh");
	    	}
	    });
});
function(doc) {
  if (doc.projectType === "Addition") {
    emit(doc.projectType, {
    	 "projectName": doc.projectName,
    	 "firstName": doc.firstName,
    	 "lastName": doc.lastName,
    	 "email": doc.email,
    	 "phone": doc.phone,
    	 "emailBest": doc.emailBest,
    	 "cost": doc.cost,
    	 "priority": doc.priority,
    	 "startDate": doc.startDate,
    	 "jobNotes": doc.jobNotes
  
    });
  }
};
function(doc) {
  if (doc._id.substr(0,9) ==="JobGenie:") {
    emit(doc._id.substr(9), {
    	 "projectType": doc.projectType,
    	 "projectName": doc.projectName,
    	 "firstName": doc.firstName,
    	 "lastName": doc.lastName,
    	 "email": doc.email,
    	 "phone": doc.phone,
    	 "emailBest": doc.emailBest,
    	 "cost": doc.cost,
    	 "priority": doc.priority,
    	 "startDate": doc.startDate,
    	 "jobNotes": doc.jobNotes
  
    });
  }
};
function(doc) {
	if (doc._id.substr(0,9) === "JobGenie:"){
		emit(doc._id.substr(9), {
			"firstName": 	doc.firstName,
			"lastName": 	doc.lastName,
			"email": 		doc.email,
			"phone":		doc.phone
		});
	}	
	
};


//$('#home').on('pageinit', function () {
$(document).ready(function(){   
$.ajax({
    	"url": 		'/asdproject/_all_docs?include_docs=true&startkey="JobGenie:project1"&endkey="JobGenie:projectzz"',
    	"dataType":	"json",
    	"success": function(data) {
    		$.each(data.rows, function(index, project){
    			var projectType = project.doc.projectType;
/*    	    	var projectName = project.value.projectName;
    	    	var firstName = project.value.firstName;
    	    	var lastName = project.value.lastName;
    	    	var email = project.value.email;
    	    	var phone = project.value.phone;
    	    	var emailBest = project.value.emailBest;
    	    	var cost = project.value.cost;
    	    	var priority = project.value.priority;
    	    	var startDate = project.value.startDate;
    	    	var jobNotes = project.value.jobNotes;
*/
    	    		$("#projectList").append(
    	    				$("<li>").append(
    	    					$("<a>").attr("href", "#")	
    	    						.text(projectType)
    	    				)
/*    	    				$("<li>").text(projectName),
    	    				$("<li>").text(firstName),
    	    				$("<li>").text(lastName),
    	    				$("<li>").text(email),
    	    				$("<li>").text(phone),
    	    				$("<li>").text(emailBest),
    	    				$("<li>").text(cost),
    	    				$("<li>").text(priority),
    	    				$("<li>").text(startDate),
    	    				$("<li>").text(jobNotes)	
 */
    	    		);
    		});
    		$("#projectList").listview("refresh");
    	}
    });
});
//$('#home').on('pageinit', function () {
$(document).ready(function(){   
$.ajax({
    	"url": 		"_view/projects",
    	"dataType":	"json",
    	"success": function(data) {
    		$.each(data.rows, function(index, project){
    			var projectType = project.value.projectType;
/*    	    	var projectName = project.value.projectName;
    	    	var firstName = project.value.firstName;
    	    	var lastName = project.value.lastName;
    	    	var email = project.value.email;
    	    	var phone = project.value.phone;
    	    	var emailBest = project.value.emailBest;
    	    	var cost = project.value.cost;
    	    	var priority = project.value.priority;
    	    	var startDate = project.value.startDate;
    	    	var jobNotes = project.value.jobNotes;
*/
    	    		$("#projectList").append(
    	    				$("<li>").append(
    	    					$("<a>").attr("href", "#")	
    	    						.text(projectType)
    	    				)
/*    	    				$("<li>").text(projectName),
    	    				$("<li>").text(firstName),
    	    				$("<li>").text(lastName),
    	    				$("<li>").text(email),
    	    				$("<li>").text(phone),
    	    				$("<li>").text(emailBest),
    	    				$("<li>").text(cost),
    	    				$("<li>").text(priority),
    	    				$("<li>").text(startDate),
    	    				$("<li>").text(jobNotes)	
 */
    	    		);
    		});
    		$("#projectList").listview("refresh");
    	}
    });
});

// working main.js in eclipse 




		 projectType = program.value.projectType;
    	 projectName = program.value.projectName;
    	 firstName = program.value.firstName;
    	 lastName = program.value.lastName;
    	 email = program.value.email;
    	 phone = program.value.phone;
    	 emailBest = program.value.emailBest;
    	 cost = program.value.cost;
    	 priority = program.value.priority;
    	 startDate = program.value.startDate;
    	 jobNotes = program.value.jobNotes;
    	 
    	 $("li").text(projectName),
    	    				$("li").text(firstName),
    	    				$("li").text(lastName),
    	    				$("li").text(email),
    	    				$("li").text(phone),
    	    				$("li").text(emailBest),
    	    				$("li").text(cost),
    	    				$("li").text(priority),
    	    				$("li").text(startDate),
    	    				$("li").text(jobNotes)
{
   "_id": "JobGenie:project1",
   "projectType": "Kitchen",
   "projectName": "Richter Kitchen",
   "firstName": "Matthew",
   "lastName": "Richter",
   "email": "matt@gorichter.com",
   "phone": "9085006304",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "9",
   "startDate": "2012-5-1",
   "jobNotes": "Re-due tile floor and add three new custom cabinets"
}
{
   "_id": "JobGenie:project2",
   "projectType": "Addition",
   "projectName": "Anderson Addition",
   "firstName": "Chris",
   "lastName": "Anderson",
   "email": "chris@anderson.com",
   "phone": "4075006304",
   "emailBest": "Yes",
   "cost": "medium",
   "priority": "7",
   "startDate": "2012-6-1",
   "jobNotes": "600 sq ft addition of the family room"
}
{
   "_id": "JobGenie:project3",
   "projectType": "Lavatory",
   "projectName": "Richter Lavatory",
   "firstName": "Matthew",
   "lastName": "Richter",
   "email": "matt@gorichter.com",
   "phone": "9085006304",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "9",
   "startDate": "2012-5-1",
   "jobNotes": "Place new face-frame on the vanity and remove bench seat in shower and re-tile"
}
{
   "_id": "JobGenie:project4",
   "projectType": "Roof",
   "projectName": "Stokes Roof",
   "firstName": "Bryan",
   "lastName": "Stokes",
   "email": "bryan@SB.com",
   "phone": "9086542727",
   "emailBest": "Yes",
   "cost": "medium",
   "priority": "8",
   "startDate": "2012-7-1",
   "jobNotes": "Take off existing two layers and repair any rotten wood"
}
{
   "_id": "JobGenie:project5",
   "projectType": "Basement",
   "projectName": "Jones Basement",
   "firstName": "Travis",
   "lastName": "Jones",
   "email": "traivs@jones.com",
   "phone": "9088393933",
   "emailBest": "Yes",
   "cost": "low",
   "priority": "4",
   "startDate": "2012-6-1",
   "jobNotes": "finish similar to the McKensie job"
}
{
   "_id": "JobGenie:project6",
   "projectType": "Addition",
   "projectName": "Trivella Addition",
   "firstName": "Adrienne",
   "lastName": "Trivella",
   "email": "ade@trivella.com",
   "phone": "9086372524",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "8",
   "startDate": "2012-5-1",
   "jobNotes": "400 square feet off the kitchen:tile floor anderson windows:match exterior"
}
{
   "_id": "JobGenie:project7",
   "projectType": "Addition",
   "projectName": "Oraschin Addition",
   "firstName": "David",
   "lastName": "Oraschin",
   "email": "dave@oraschin.com",
   "phone": "9086270412",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "10",
   "startDate": "2012-7-1",
   "jobNotes": "blow out family room wall and add 600 square foot great room:match exterior"
}
{
   "_id": "JobGenie:project8",
   "projectType": "Lavatory",
   "projectName": "Mantes Lavatory",
   "firstName": "Gerry",
   "lastName": "Mantes",
   "email": "gerry@mantes.com",
   "phone": "9081232930",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "7",
   "startDate": "2012-7-1",
   "jobNotes": "new toilet:bath tub:vanity and shower"
}
{
   "_id": "JobGenie:project9",
   "projectType": "Lavatory",
   "projectName": "Smith Lavatory",
   "firstName": "John",
   "lastName": "Smith",
   "email": "john@smith.com",
   "phone": "9082549986",
   "emailBest": "Yes",
   "cost": "low",
   "priority": "6",
   "startDate": "2012-8-1",
   "jobNotes": "New shower tile and floor"
}
{
   "_id": "JobGenie:project10",
   "projectType": "Roof",
   "projectName": "Roth Roof",
   "firstName": "Joe",
   "lastName": "Roth",
   "email": "joe@roth.com",
   "phone": "9085317283",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "6",
   "startDate": "2012-9-1",
   "jobNotes": "Roof over existing roof no dumpster required"
}
{
   "_id": "JobGenie:project11",
   "projectType": "Lavatory",
   "projectName": "Stires Lavatory",
   "firstName": "Kim",
   "lastName": "Stires",
   "email": "kim@wfb.com",
   "phone": "9084737272",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "8",
   "startDate": "2012-8-1",
   "jobNotes": "Gut the entire bathroom and replace everything"
}
{
   "_id": "JobGenie:project12",
   "projectType": "Addition",
   "projectName": "Papio Addition",
   "firstName": "Matthew",
   "lastName": "Papio",
   "email": "matt@papio.com",
   "phone": "9736473829",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "7",
   "startDate": "2012-6-1",
   "jobNotes": "new floor:vanity and bath"
}
{
   "_id": "JobGenie:project13",
   "projectType": "Basement",
   "projectName": "Richter Basement",
   "firstName": "James",
   "lastName": "Dill",
   "email": "james@dill.com",
   "phone": "9732781166",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "5",
   "startDate": "2012-10-1",
   "jobNotes": "finish entire basement sheetrock and tile floor with built-ins"
}
{
   "_id": "JobGenie:project14",
   "projectType": "Basement",
   "projectName": "Kelly Basement",
   "firstName": "Jeff",
   "lastName": "Kelly",
   "email": "jeff@kelly.com",
   "phone": "9084738383",
   "emailBest": "Yes",
   "cost": "medium",
   "priority": "5",
   "startDate": "2012-11-1",
   "jobNotes": "wine closet and sheetrock with cork floor"
}
{
   "_id": "JobGenie:project15",
   "projectType": "Lavatory",
   "projectName": "Richdale Lavatory",
   "firstName": "John",
   "lastName": "Richdale",
   "email": "john@richdale.com",
   "phone": "9734920098",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "4",
   "startDate": "2012-12-1",
   "jobNotes": "gut entire bathroom new everything with built-in tile shower and new vanity"
}
{
   "_id": "JobGenie:project16",
   "projectType": "Roof",
   "projectName": "Hollis Roof",
   "firstName": "Link",
   "lastName": "Hollis",
   "email": "link@hollis.com",
   "phone": "9085006304",
   "emailBest": "Yes",
   "cost": "medium",
   "priority": "9",
   "startDate": "2012-7-1",
   "jobNotes": "Tear off existing roof replace rotten wood + new gutters"
}
{
   "_id": "JobGenie:project17",
   "projectType": "Kitchen",
   "projectName": "Stires Kitchen",
   "firstName": "Pete",
   "lastName": "Stires",
   "email": "pete@stires.com",
   "phone": "9087776253",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "9",
   "startDate": "2012-6-1",
   "jobNotes": "all new cabinets conestoga doors and custom island"
}
{
   "_id": "JobGenie:project18",
   "projectType": "Kitchen",
   "projectName": "Mathis Kitchen",
   "firstName": "Michael",
   "lastName": "Mathis",
   "email": "mike@mathis.com",
   "phone": "9087223314",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "4",
   "startDate": "2012-11-1",
   "jobNotes": "all new cabinets and wine rack and tile floor"
}
{
   "_id": "JobGenie:project19",
   "projectType": "Kitchen",
   "projectName": "Long Kitchen",
   "firstName": "Tom",
   "lastName": "Long",
   "email": "tom@long.com",
   "phone": "9083764737",
   "emailBest": "Yes",
   "cost": "medium",
   "priority": "7",
   "startDate": "2012-8-1",
   "jobNotes": "new doors and paint job"
}
{
   "_id": "JobGenie:project20",
   "projectType": "Roof",
   "projectName": "Monica Roof",
   "firstName": "James",
   "lastName": "Monica",
   "email": "james@monica.com",
   "phone": "9089874232",
   "emailBest": "Yes",
   "cost": "high",
   "priority": "9",
   "startDate": "2012-6-1",
   "jobNotes": "Remove old roof & gutters"
}
{
   "_id": "section:contacts",
   "title": "contacts",
   "description": "quickly access you contact name, phone and email information",
}
{
   "_id": "section:additionss",
   "title": "additions",
   "description": "cape to colonial, master bedroom, second story"
}
{
   "_id": "section:basements",
   "title": "basements",
   "description": "game room, extra kitchen, wine cellar, man cave"
}
{
   "_id": "section:kitchens",
   "title": "kitchens",
   "description": "cabinets, tile back splash, custom islands, counter tops"
}
{
   "_id": "section:lavatories",
   "title": "lavatories",
   "description": "bathrooms, vanities, tile showers, fixtures"
}
{
   "_id": "section:roofs",
   "title": "roofs",
   "description": "weather shielding, turrets, slate"
}