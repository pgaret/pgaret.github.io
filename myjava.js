var old = null;

function details(param){
	if (old != null){
		document.getElementById(old).style.visibility = "hidden";
	}

	document.getElementById(param).style.visibility = "visible";
	if (param == "MM"){
		document.getElementById("MM").innerHTML = "Myths and Magic: <br> <ul><li>Fantasy RPG</li><li>3 Month Development Period</li><li>Roles: Lead, Designer, Writer</li>";		
	}
	if (param == "GaG"){
		document.getElementById("GaG").innerHTML = "Gold and Glory: <br> <ul><li>Bullet Hell (Shoot e'm Up)</li><li>3 Month Development Period</li><li>Roles: Lead, Designer, Coder</li>";		
	}	
	if (param == "Asylum"){
		document.getElementById("Asylum").innerHTML = "Asylum: <br> <ul><li>Psychological Thriller</li><li>Used Oculus Rift VR<li>3 Month Development Period</li><li>Roles: Lead, Designer</li>";		
	}
	if (param == "Tribute"){
		document.getElementById("Tribute").innerHTML = "Tribute Page: <br> <ul><li>Dedicated to William Hartnell</li><li>The first Doctor</li><li>Basic HTML & CSS</li>";				
	}
	if (param == "Random"){
		document.getElementById("Random").innerHTML = "Random Quotes: <br> <ul><li>Throws out random quotes from a list</li><li>Can tweet out the quotes</li><li>HTML, CSS, JavaScript</li>";				
	}
	if (param == "Weather"){
		document.getElementById("Weather").innerHTML = "Weather App: <br> <ul><li>Returns temperature & weather conditions</li><li>Uses Wunderground API w/ JSON</li><li>Searches using Zip or City</li>";				
	}		
	
	old = param;
}