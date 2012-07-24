function(doc) {
  if (doc._id.substr(0,8) ==="section:") {
    emit(doc._id.substr(8), {
    	 "title": doc.title,
    	 "description": doc.description
    });
  }
};