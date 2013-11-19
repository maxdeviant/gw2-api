var defaultWorld = "2204";

function Index($scope, API, $cookieStore) {
	if ($cookieStore.get('Worlds')) {
		$scope.Worlds = $cookieStore.get('Worlds');
	} else {
		console.log("Error: Worlds cookie not found");
	}
}

function Events($scope, API) {
	var world_id = $('#world-list').val() || defaultWorld;

	API.Events.getEvents(world_id).success(function(data) {
		$scope.Events = data.events;
	});

	API.Maps.getMaps().success(function(data) {
		var keys = Object.keys(data.maps);

		for (var i = 0; i < keys.length; i++) {
			data.maps[keys[i]].map_id = keys[i];
		}

		$scope.Maps = data.maps;
	});
}

function EventsMap($scope, $routeParams, API) {
	var world_id = $('#world-list').val() || defaultWorld;
	var map_id = $routeParams.map_id;

	API.Events.getEvents(world_id, map_id).success(function(data) {
		$scope.Events = data.events;
	});
}

function EventDetails($scope, $routeParams, API) {
	var world_id = $('#world-list').val() || defaultWorld;
	var map_id = $routeParams.map_id;
	var event_id = $routeParams.event_id;

	API.Events.getEvents(world_id, map_id, event_id).success(function(data) {
		$scope.Event = data.events[0];
	});

	API.Events.getEventDetails(event_id).success(function(data) {
		$scope.EventDetails = data.events[event_id];
	});
}

function WvW($scope, API, API_Util) {
	API.WvW.getMatches().success(function(data) {
		var matches = data.wvw_matches;

		for (var i = 0; i < matches.length; i++) {
			matches[i].Worlds = {
				Blue: API_Util.getWorldName(matches[i].blue_world_id),
				Green: API_Util.getWorldName(matches[i].green_world_id),
				Red: API_Util.getWorldName(matches[i].red_world_id)
			};
		}

		$scope.Matches = matches;
	});

	$scope.getWorldName = function(world_id) {
		return API_Util.getWorldName(world_id);
	}
}

function WvWMatches($scope, $routeParams, API, API_Util) {
	var match_id = $routeParams.match_id;

	API.WvW.getMatches().success(function(data) {
		var matches = data.wvw_matches;

		for (var i = 0; i < matches.length; i++) {
			if (matches[i]['wvw_match_id'] === match_id) {
				$scope.Match = matches[i];

				API.WvW.getMatchDetails(match_id).success(function(data) {
					$scope.MatchDetails = data;
				});

				$scope.Worlds = {
					Blue: API_Util.getWorldName(matches[i]['blue_world_id']),
					Green: API_Util.getWorldName(matches[i]['green_world_id']),
					Red: API_Util.getWorldName(matches[i]['red_world_id'])
				};
			}
		}
	});
}

function Items($scope, API) {
	API.Items.getItems().success(function(data) {
		// $scope.Items = data.items;
	});
}