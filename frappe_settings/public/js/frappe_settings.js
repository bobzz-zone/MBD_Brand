$(document).ready(function() {
	$('body').bind("DOMSubtreeModified",function(){
		$('.app-logo').prop('src', '/files/applogo.png')
		$('.level-right a').html('')
	})
	
})