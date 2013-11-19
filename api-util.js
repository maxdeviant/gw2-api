App.factory('API_Util', ['API', function(API) {
	var worlds;

	API.getWorlds().success(function(data) {
		store(data);
	});

	var API_Util = function(){};

	API_Util.getWorldName = function(id) {
		for (var i = 0; i < worlds.length; i++) {
			if (worlds[i]['id'] == id) {
				return worlds[i]['name'];
			}
		}
	}

	// Stores response of AJAX call to worlds variable
	// May need to expound on it if neccessary
	// Right now it's a junk function
	function store(value) {
		worlds = value;
	}
	
	return API_Util;
}]);