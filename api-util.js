// App.factory('API_Util', 

var API_UtilFactory = function(API, $cookieStore) {
	var worlds = [];

	if ($cookieStore.get('Worlds')) {
		worlds = $cookieStore.get('Worlds');
	} else {
		console.log("Error: Worlds cookie not found.");
	}

	var API_Util = function(){};

	API_Util.getWorldName = function(id) {
		for (var i = 0; i < worlds.length; i++) {
			if (worlds[i]['id'] == id) {
				return worlds[i]['name'];
			}
		}
	}
	
	return API_Util;
}

API_UtilFactory.$inject = ['API', '$cookieStore'];

App.factory('API_Util', API_UtilFactory);