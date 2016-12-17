$(document).ready(function(){

	$('#password-edit-button').on('click', function(e){
		e.preventDefault();
		$('#changePasswordModal').modal();
	})
});