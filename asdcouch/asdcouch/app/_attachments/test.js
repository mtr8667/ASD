$('#home').on('pageinit', function () {
//$(document).ready(function(){   
$.ajax({
    	"url": 		"_view/projects",
    	"dataType":	"json",
    	"success": function(data) {
    		console.log(data);
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
    	    		$("#projectsList").append(
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
    		$("#projectsList").listview("refresh");
    	}
    });
});
