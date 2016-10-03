var initMap = function() {
	var options = {
		zoom:17,
		center:new google.maps.LatLng(22.583534, 88.364855),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var my_map = new google.maps.Map(document.getElementById("google-map"),options);
	var markerOptions = {
		map : my_map,
		position : new google.maps.LatLng(22.583534, 88.364855)
	};
	var marker = new google.maps.Marker(markerOptions);
	var info_windowOptions = {
		content : '<strong>Technomac Industrial Concern</strong><br>13, Rajendra Sen Lane, Kolkata-700006<br>'
	};  
	var info_window = new google.maps.InfoWindow(info_windowOptions);
	info_window.open(my_map,marker);	
	google.maps.event.addListener(marker,'click',function(){info_window.open(my_map,marker);});
}

google.maps.event.addDomListener(window,'load',initMap);
