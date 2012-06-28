// Matthew RIchter 
// MIU - Full Sail University
// Project 3
// May 17, 2012


var parseProjectForm = function(data){
// uses form data here 
	console.log(data);
};
/* sample code from video why jQuery on using JavaScript without library then with library 
window.addEventListener('DOMCOntentLoaded',function(){
	document.getElementById('somelink')
	.addEventListener('click', myFn);
});
thie above will only work in browsers that support W3C

jQuery equivilant

$(function(){
	$('somelink').bind('click', myFn);
});

*/

//$(document).ready(function(){ - this allows us to wait until the document is fully loaded before we run our code
// this wraps all of our code
// the $ = jQuery object name space - so when we use the $ / the jQuery name space is broken down into two main categories
// utilities methods are all of the methods that are directly on the object itself  example $.trim()  $.merge(); etc... reference the cheat sheet
// the second category is the factory using jquery as a function $() - when the jquery factory is mentioned or referenced it means $()
// the primary use of the factory is to find an element within the page then is gives us additional methods that we can call on top of it.
// we can call global objects like $(document) or $(window) but the more common use is to call a CSS selector expression
// $('')  allows us to pass a string with a CSS selector expression to search the DOM to find elements
// example $('#nav li') this will find all li(s) within a the nav divs we can also consolelog this  consolelog( $('#nav li'));
// when the factory pulls up these elements we can also then we can use the additional methiods jQuery provides on top of it
// example $('#nav li').fadeOut();  this will automatically loop through all the li(s) and fade them out
// Important ****  most of the methods return exactly what the factor called - this can be viewed by consoleloggin the factory call and method see below
// consolelog( $('#nav li').fadeOut() ); - this is important to us becasue we can keep calling methods so we can chain
// example $('#nav li').fadeOut().fadeIn().animate({fontSize:30},100);
// Downside to calling the factory is that everytime we call the factory it creates an object so we can create a var
// example var navlist = $('nav li').fadeOut() etc....  so the next time we want to access the nav li(s) we call var navlist
// some of the jquery factory methods are not chainable $('#nav').hasClass('myClass') returns a boolean - true or false 
// the hasClass is a good way to search through you document to fins all the elements that have a certain class - in the example above it would be all the nav(s) that have a certain class 

/*
$(document).bind('pageinit',function(){
	
	var 	projectform = $( "#projectform" ),
			formerrorslink = $("#formerrorslink")
	;
			

	projectform.validate({
		invalidHandler: function(form, validator){
			// this bring up the pop up error dialog
			formerrorslink.click();
			var html = ' ';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName + '</li>';
			};
			$('#showerrors ul').html(html);
		},
		submitHandler: function(){
			var 	data = projectform.serializeArray();
			parseProjectForm(data);
		}
	});
});
*/
// Just above is the JavaScript I used for the Gold MIU app - below is my attempt at jQuery ... here we go
// function for document ready - this will wrap our entire code.
$(function(){
	var element = $(document),
		projectform = $( "#projectform" ),
		formerrorslink = $("#formerrorslink")
	;
// Toggle control 
	function toggleControls(n){
		switch(n){
			case "on":
					$("projectForm").css("display", "none");
					$("clearProjectsLink").css("display", "inline");
					$("showProjectsLink").css("display", "none");
					$("newProject").css("display", "inline");
					$("footer").css("display", "none");
					break;
			case "off":
					$("projectForm").css("display", "block");
					$("clearProjectsLink").css("display", "inline");
					$("showProjectsLink").css("display", "inline");
					$("newProject").css("display", "none");
					$("items").css("display", "none");
					break;
			default:
					return false;
		}
	}

// the key is only generated when we are editing a project so if there is no key its a new project
	function saveLocal(key){
		if(!key){
			var 	id 						= Math.floor(Math.random()*10000001);
		}else{
			//set the id to the existing key we're editing so the data will be modified and we'll save over the original data
			//this key has been passed along from the editSaveProject eventListener to the validate function then passed here
			// into storeLocal function
			id = key;
		}
		// get all the form field values and store them in an object.
		// the object properties contain an array with the form label and input value.
		getSelectedRadio();
		getCheckboxValue();
		var	item 					= {};
				item.project		= ["Project Type:", ge("project").value];
				item.pname 		= ["Project Name:", ge("pname").value];
				item.fname 		= ["First Name:", ge("fname").value];
				item.lname 			= ["Last Name:", ge("lname").value];
				item.email 			= ["Email:", ge("email").value];
				item.phone 			= ["Phone:", ge("phone").value];			
				item.emailOkay 	= ["Communicate Via email:", emailOkay];
				item.cost			= ["Price per sq ft.", cost];			
				item.priority 		= ["Priority", ge("priority").value];
				item.startDate		= ["Start Date", ge("startDate").value];
				item.jobNotes 		= ["Job Notes", ge("jobNotes").value];
		// Save data into local storage : use stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));	
		alert("Your project has been saved successfully!");			
	} 


// Write data from localStorage to the browser
	function getProjects(){
		toggleControls("on");
		if(localStorage.length === 0 ){
			alert("There is no data in local storage so default data has been added.");
			autoFillData();
		}
		var makeDiv	= document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		ge("items").style.display = "block";
		for( var i = 0, len=localStorage.length; i<len; i++){
			var makeLi = document.createElement("li");
			var linksLi	= document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert the string from localStorage value back to an object using JSON.parse
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			getImage(obj.project[1], makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
				}
				// create links/buttons (edit & delete) for each project in local storage
				makeItemLinks(localStorage.key(i), linksLi); 
		}
	}		
// Auto populate local storage from json
	// actual json object data for this to work will come from json.js which is loaded from HTML page
	// the main.js and json.js files can see eachothers variables - that's why we can loop through json in the main.js file
	function autoFillData(){
		for(var n in json){
			var 	id 	= Math.floor(Math.random()*10000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}

// Validate function for the form
	projectform.validate({
		invalidHandler: function(form, validator){
			// this bring up the pop up error dialog
			formerrorslink.click();
			var html = ' ';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName + '</li>';
			};
			$('#showerrors ul').html(html);
		},
		submitHandler: function(){
			var 	data = projectform.serializeArray();
			parseProjectForm(data);
		}
	});
	// Set link & submit Click Events 
 	/*
 	var showProjectsLink = ge("showProjectsLink");
 	showProjectsLink.addEventListener("click", getProjects);
 	var clearProjectsLink = ge('clearProjectsLink');
 	clearProjectsLink.addEventListener("click", deleteProject); 
 	var save = ge("saveProject");
 	save.addEventListener("click", validate);
 	*/
 	$("#getProjects").on("click", getProjects); 
	
	
	
	
});

