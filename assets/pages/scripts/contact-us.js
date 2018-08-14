var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	            lat: -22.9994180,
				lng: -43.3487520,
			  });
			   var marker = map.addMarker({
		            lat: -22.9994180,
					lng: -43.3487520,
		            title: 'Le Monde Office',
		            infoWindow: {
		                content: "Av. das Americas, 3.500 BL 4 Sala 431 - Barra da Tijuca - Rio de Janeiro/RJ"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();