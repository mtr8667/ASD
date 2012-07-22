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