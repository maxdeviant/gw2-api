App.factory('API_Util', ['API', function(API) {
	var worlds = API.getWorlds();

	var API_Util = function(){};

	API_Util.getWorldName = function(id) {
		for (var i = 0; i < worlds.length; i++) {
			if (worlds[i]['id'] == id) {
				return worlds[i]['name'];
			}
		}
	}
	
	return API_Util;
}]);