var name = "PEREGRIN GARET"
$(document).ready(function(){
	setTimeout(function fillName(){
		let index = $("#title").text().length; let str = ""
		if (name[index] === " " && index < name.length) { str = name[index]+name[index+1] }
		else { str = name[index] }
		$("#title").append(str)
		if ($("#title").text().length < name.length){
			setTimeout(fillName, 100)
		}
		else {
			spawnSkills()
		}
	}, 100)
})

function spawnSkills(){
	let i = 0;
	setTimeout(function show(){
		$($("#skills").children()[i]).animate({
			opacity: 1
		}, 500, function(){
					i++
					if (i < $("#skills").children().length){
						setTimeout(show, 100)
					}
					else {
						spawnIcons()
					}
				})
	}, 100)
}

function spawnIcons(){
	var dir = './images/webdev'
	var ext = '.png'
	$.ajax({
		url: dir,
		success: function(data){
			$(data).find("a:contains("+ext+")").each(function(){
				var filename = this.href.replace(window.location.host, "").replace("http://", "")
				console.log("<img src='" + dir + filename + "'>")
			})
		}
	})
	$("#webdev").append("<img id='icon' src='./images/webdev/1_html.png'></img>")
}
