$(document).ready(function() {
	$('body').bind("DOMSubtreeModified",function(){
		$('.app-logo').prop('src', '/assets/frappe_settings/img/applogo.png')
		$('.level-right a').html('')
	})
	
})