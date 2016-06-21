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
	
	old = param;
}