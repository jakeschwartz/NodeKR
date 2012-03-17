$(document).ready(function(){
	var userID = $('#id').val();
	var docID = $('#docid').val();
	$("body").on('click', '#depend', function(){
		$(this).attr('value', userID);
		var address = $(this).closest('li').attr('id')
		var object = {
			"user": userID,
			"address": address,
			"doc": docID
		};
		$.post('/view-post', object, function(data) {
			console.log(data);
		});		
	})
	
	$("body").on('click', '#enable', function(){
		$(this).attr('value', userID);		
	})
	
	$("body").on('click', '.comments', function() {
		$(this).closest('div.comments').attr('display', 'visible');	
	});
	
	$('input[name="submitcomment"]').click(function() {
			var text = $(this).siblings('input#comment-text').val();
			console.log(text);
			var object = {
				text: text,
				user: userID,
				doc: docID,
				address: $(this).parent().attr('id')
			};
			$.post('/comment-post', object, function(data) {
				console.log(data)
			});
			$(this).parent().remove();
			
		});


});