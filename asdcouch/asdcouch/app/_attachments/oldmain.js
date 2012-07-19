$('#home').on('pageinit', function () {   
$("#additionsList").empty();
	$.ajax({
    	"url": 		"_view/additions",
    	"dataType":	"json",
    	"success": function(data) {
    		console.log(data);
    		
    		$.each(data.rows, function(index, addition){
//    			var projectType = addition.value.projectType;
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
    	    				$("<li>").append(
    	    					$("<a>").attr("href", "#")	
    	    						.text(projectName)
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
    		$("#additionsList").listview("refresh");
    	}
    });
/*$.ajax({
	"url": 		"_view/basements",
	"dataType":	"json",
	"success": function(data) {
		$.each(data.rows, function(index, basement){
//			var projectType = basement.value.projectType;
			var projectName = basement.value.projectName;
	    	var firstName = basement.value.firstName;
	    	var lastName = basement.value.lastName;
	    	var email = basement.value.email;
	    	var phone = basement.value.phone;
	    	var emailBest = basement.value.emailBest;
	    	var cost = basement.value.cost;
	    	var priority = basement.value.priority;
	    	var startDate = basement.value.startDate;
	    	var jobNotes = basement.value.jobNotes;

	    		$("#basementsList").append(
	    				$("<li>").append(
	    					$("<a>").attr("href", "#")	
	    						.text(projectName)
	    				)
//    	    				$("<li>").text(projectName),
//	    				$("<li>").text(firstName),
//	    				$("<li>").text(lastName),
//	    				$("<li>").text(email),
//	    				$("<li>").text(phone),
//	    				$("<li>").text(emailBest),
//	    				$("<li>").text(cost),
//	    				$("<li>").text(priority),
//	    				$("<li>").text(startDate),
//	    				$("<li>").text(jobNotes)	

	    		);
		});
		$("#basementsList").listview("refresh");
	}
});
*/
});
