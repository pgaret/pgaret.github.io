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
			fadeInChildren("skills", spawnIcons)
		}
	}, 100)
})

function fadeInChildren(str, callback){
	let i = 0;
	setTimeout(function show(){
		$($("#"+str).children()[i]).animate({
			opacity: 1
		}, 500, function(){
					i++
					if (i < $("#"+str).children().length){
						setTimeout(show, 100)
					}
					else {
						callback()
					}
				})
	}, 100)
}

function spawnIcons(){
	fadeInChildren("icons", nextThing)
}

function nextThing(){
	console.log("welp")
}
