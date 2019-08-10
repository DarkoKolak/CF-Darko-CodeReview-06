
function paint(){
	$(this).closest(".newtasks").css("background-color", "#363357");
	$(this).closest(".newtasks").prop("title", "p");
	}

 function remove1(){
	$(this).closest(".newtasks").remove();

	var n = $(".newtasks").length;
	$("#open").text(n);
}

function drag (){
	$("#result").sortable();
}

$("#choose").on("change", function(){

	var change = $("#choose").val();
	var open = $(".newtasks[title = 'p']");
	var closed = $(".newtasks[title = 'r']");



	switch(change){

		case "done":
		open.css("display","flex");
		closed.css("display", "none");
		console.log("i was triggered");
		break;

		case "not":
		open.css("display","none");
		closed.css("display", "flex");
		break;

		case "all":
		open.css("display","flex");
		closed.css("display", "flex");
		break;

	};


})
