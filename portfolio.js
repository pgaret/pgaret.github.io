var name = "PEREGRIN GARET";
var currentPopup = "";
var currentSlide = 0;


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
