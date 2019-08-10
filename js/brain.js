		
	$("#add").click(adding);

	function adding(){
		if ($("#ifield").val().length == 0) {
			alert("Please write a task description");
		}
		else{
		$("#result").append(`<div class = "newtasks" title = "r"> <div class = "small"> ${$("#ifield").val()} </div>
			<button class = "yes">  &#10003</button>
			<button class = "no">  &#10005 </button>` );

		drag();

		var n = $(".newtasks").length;
		$("#open").text(n);

		$(".yes").click(paint);
		$(".no").click(remove1);
	}
	}
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
	var i = 0;


	switch(change){

		case "done":
		open.css("display","flex");
		closed.css("display", "none");
		console.log("i was triggered");
		 i = open.length; 
		 $("#open").text(i);
		break;

		case "not":
		open.css("display","none");
		closed.css("display", "flex");
		i = closed.length;
		 $("#open").text(i);
		break;

		case "all":
		open.css("display","flex");
		closed.css("display", "flex");
		i = $(".newtasks").length;
		 $("#open").text(i);
		break;

	};


})
