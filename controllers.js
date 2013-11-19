var defaultWorld = "2204";

function Index($scope, API) {
	API.getWorlds().success(function(data) {
		$scope.Worlds = data;
	});
}

function Events($scope, API) {
	var world_id = $('#world-list').val() || defaultWorld;

	API.Events.getEvents(world_id).success(function(data) {
		$scope.Events = data.events;
	});

	API.Maps.getMaps().success(function(data) {
		$scope.Maps = data.maps;
	});
}

function EventsMap($scope, $routeParams, API) {
	var world_id = $('#world-list').val() || defaultWorld;
	var map_id = $routeParams.map_id;

	API.Events.getEvents(world_id, map_id).success(function(data) {
		$scope.Events = data.events;
	});

	// $scope.Events = API.Events.getEvents(world_id, map_id);
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

function WvW($scope, API) {
	API.WvW.getMatches().success(function(data) {
		$scope.Matches = data.wvw_matches;
	});

	// $scope.Matches = API.WvW.getMatches().wvw_matches;

	// console.log($scope.Matches);
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