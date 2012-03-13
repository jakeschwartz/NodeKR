//Create

$(document).ready(function() {
	var objCounter = 1;
	$("#addobj").click(function(){
		$("#okrform").append("<div class='objdiv' name='" + objCounter + "'>" + objCounter +". <input type='text' class='obj' name='obj" + objCounter + 			"[goal]'><p><p><ul class='ul'><input type='button' class='addkr' id='" + objCounter + "' value='+KR'><p></ul></div>")
		objCounter++;
		
		
	});

	$("#okrform").on("click", ".addkr", function() {
		var count = $(this).closest('ul').children();
		var countVar = count.length/2;
		var objCount = $(this).attr('id');
  		$(this).parent().append(countVar +". <input type='text' name='obj" + objCount + "[kr" + countVar + "]'><p>");
	});


	$("#save").click(function() {
		var okrObject = $("#okrform").formParams();
		$.post('/okr-post', okrObject, function(data) {
				window.location = data;
		});
		
	});
});

