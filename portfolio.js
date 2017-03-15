var name = "PEREGRIN GARET";
var currentPopup = "";
var currentSlide = 0;

$(document).ready(function(){
	setTimeout(function fillName(){
		let index = $("#title").text().length; let str = ""
		if (name[index] === " " && index < name.length) { str = name[index]+name[index+1] }
		else { str = name[index] }
		$("#title").append(str);
		if ($("#title").text().length < name.length){
			setTimeout(fillName, 100);
		}
		else {
			fadeInChildren("skills", spawnIcons)
		}
	}, 100)
})

function generateRandomString(length) {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

function handleSpotify(){
	var state_key = 'spotify_auth_state'

	var client_id = '989f3f3de3af4e5796d9b5e15bc87aeb'
	var redirect_uri = 'http://pgaret.github.io/music'
	var state = generateRandomString(16)

	localStorage.setItem(state_key, state)
	var scope = 'user-read-private user-read-email'

	var url = 'https://accounts.spotify.com/authorize?response_type=token'
	url += '&client_id='+encodeURIComponent(client_id)
	url += '&scope=' + encodeURIComponent(scope);
	url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
	url += '&state=' + encodeURIComponent(state);

	window.location = url
}

function getHashParams() {
	var hashParams = {};
	var e, r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
	while ( e = r.exec(q)) {
		 hashParams[e[1]] = decodeURIComponent(e[2]);
	}
	return hashParams;
}

function getMusicInfo(){
	var params = getHashParams()
	var access_token = params.access_token
	var state = params.state
	var stored_state = localStorage.getItem('spotify_auth_state')
	console.log("state: "+state)

	if (access_token && (state == null || state !== stored_state)){
		alert("Authorization failed")
	} else {
		localStorage.removeItem(state_key)
		if (access_token){
			$.ajax({
					url: 'https://api.spotify.com/v1/me',
					headers: {
						'Authorization': 'Bearer ' + access_token
					},
					success: function(response) {
						console.log(response)
					}
			});
		} else {
				console.log("Fail")
		}
	}
}

function fadeInChildren(str, callback){
	let i = 0;
	setTimeout(function show(){
		if (i !== 0) { $($("#"+str).children()[i]).css("display", "inline-block") }
		$($("#"+str).children()[i]).animate({
			opacity: 1
		}, 500, function(){
					i++
					if (i < $("#"+str).children().length){
						setTimeout(show, 100);
					}
					else {
						if (callback) {callback()}
					}
				})
	}, 100)
}

function spawnIcons(){
	fadeInChildren("icons");
}

function openPopup(id){
	$(".popup").css("display", "block");
	$("#"+id).css("display", "block");
	$("body").css("background-color", "rgb(36,99,54)")
	$(".header:first").css("opacity", ".1")
	currentPopup = id;
}

function closePopup(){
	$(".popup").css("display", "none");
	$("#"+currentPopup).css("display", "none");
	$("body").css("background-color", "rgb(96,169,124)")
	$(".header:first").css("opacity", "1")
	currentPopup = "";
	currentSlide = 0;
}

function slideShow(dir){
	let slides = "#"+currentPopup+" .slides"
	let nav = "#"+currentPopup+" #nav"
	if (dir == -1){
		if (currentPopup !== "" && currentSlide > 0){
			currentSlide -= 1;
			$(slides).children().slice(currentSlide+1, currentSlide+2).css("display", "none");
			$(slides).children().slice(currentSlide, currentSlide+1).css("display", "block");
			if (currentSlide === 0){
				$(nav).children().first().attr("disabled", true)
			} else {
				$(nav).children().first().attr("disabled", false)
			}
			$(nav).children().slice(1).attr("disabled", false)
		}
	}
	else if (dir == 1 && currentSlide < $(slides).children().length - 1){
		currentSlide += 1;
		$(slides).children().slice(currentSlide-1, currentSlide).css("display", "none");
		$(slides).children().slice(currentSlide, currentSlide+1).css("display", "block");
		if (currentSlide === $(slides).children().length - 1){
			$(nav).children().slice(1).attr("disabled", true)
		} else{
			$(nav).children().slice(1).attr("disabled", false)
		}
		$(nav).children().first().attr("disabled", false)
	}
}
