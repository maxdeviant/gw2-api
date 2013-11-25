var API_UtilFactory = function(API, $cookieStore) {
	var worlds = [];
	var items = [];

	if ($cookieStore.get('Worlds')) {
		worlds = $cookieStore.get('Worlds');
	} else {
		console.log("Error: Worlds cookie not found.");
	}

	if ($cookieStore.get('Items')) {
		items = $cookieStore.get('Items');
	} else {
		console.log("Error: Items cookie not found.");
	}

	var API_Util = function(){};

	API_Util.getWorldName = function(id) {
		for (var i = 0; i < worlds.length; i++) {
			if (worlds[i]['id'] == id) {
				return worlds[i]['name'];
			}
		}
	}

	API_Util.getZones = function(maps) {
		for (var i = 0; i < maps.length; i++) {
			API.Events.getEvents(world_id, maps[i].map_id).success(function(data) {
				if (data.events.length > 0) {
					// store(maps[i]);
				}
			});
		}
	}

	API_Util.getItemName = function(id) {
		for (var i = 0; i < items.length; i++) {
			if (items[i]['id'] == id) {
				return items[i]['name'];
			}
		}
	}
	
	return API_Util;
}

API_UtilFactory.$inject = ['API', '$cookieStore'];

App.factory('API_Util', API_UtilFactory);