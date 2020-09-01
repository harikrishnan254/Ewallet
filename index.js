$(document).ready(function(){
	/*for modal*/
    $('.modal').modal({
    	startingTop: '80%',
    	inDuration: 1000,
    	outDuration: 1000
    	});
    /*for tooltip*/
    
  
    $('.tooltipped').tooltip();
    //for search box

    $('input.autocomplete').autocomplete({
    	data:{
    		"Mobile recharge": null,
    		"Broadband Recharge": null,
    		"DTH Recharge": 'https://www.google.com'

    	}
    });
    
    $('.sidenav').sidenav();

});