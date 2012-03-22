//Create

$(document).ready(function() {
	
	
	var objCounter = 0;
	$("#addobj").click(function(){
		$("#okrform").append("<input type='hidden' name='okr[" + objCounter + "][comments]'><div class='objdiv' name='" + objCounter + "'>" + (objCounter + 1) +". <input type='text' class='obj' name='okr[" + objCounter + 			"][goal]'><p><p><ul class='ul'><input type='button' class='addkr' id='" + objCounter + "' value='+KR'><p></ul></div>")
		objCounter++;		
	});

	$("#okrform").on("click", ".addkr", function() {
		var count = $(this).closest('ul').children('#kr-input');
		var countVar = count.length;
		var objCount = $(this).attr('id');
  		$(this).parent().append((countVar + 1) +". <input id='kr-input' type='text' name='okr[" + objCount + "][" + countVar + "][text]'> <span id='date'>Date: <input type='text'   name='okr[" + objCount + "][" + countVar + "][date]'></span><p>");
  		$('#date input').Zebra_DatePicker({format: 'm/d/Y'});
	});


	$("#save").click(function() {
		var okrObject = $("#okrform").formParams();
		$.post('/okr-post', okrObject, function(data) {
				window.location = data;
		});
		
	});

});

