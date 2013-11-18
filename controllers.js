function Index($scope, API) {
	$scope.Worlds = API.getWorlds();
}

function Events($scope, API) {
	$scope.Events = API.Events.getEvents($('#world-list').val());
	console.log($scope.Events);
}

function WvW($scope, API) {
	$scope.Matches = API.WvW.getMatches().wvw_matches;

	// console.log(API.WvW.getMatchDetails("2-1"));

	console.log($scope.Matches);
}

function WvWMatches($scope, $routeParams, API) {
	var match_id = $routeParams.match_id;
	var matches = API.WvW.getMatches().wvw_matches;
	var worlds = API.getWorlds();
	console.log(matches);
	console.log(match_id);

	for (var i = 0; i < matches.length; i++) {
		if (matches[i]['wvw_match_id'] === match_id) {
			$scope.Match = matches[i];
			$scope.MatchDetails = API.WvW.getMatchDetails(match_id);

			$scope.Worlds = {
				Blue: getWorldName(matches[i]['blue_world_id']),
				Green: getWorldName(matches[i]['green_world_id']),
				Red: getWorldName(matches[i]['red_world_id'])
			};

			// console.log($scope.Worlds);
		}
	}

	console.log(worlds);

	function getWorldName(id) {
		for (var i = 0; i < worlds.length; i++) {
			if (worlds[i]['id'] == id) {
				return worlds[i]['name'];
			}
		}
	}
}

function Items($scope, API) {

	// $scope.Page = 1;

	console.log(API.Items.getItems());

	// var rawItems = GW.getItems().items;
	// var detail = [];
	// console.log(rawItems);

	// console.log(Math.round(rawItems.length / 100));

	// for (var i = 0; i < 10; i++) {
	// 	// detail.push({ id: rawItems[i], name: GW.getItemDetails(rawItems[i]).name });
	// 	detail.push(GW.getItemDetails(rawItems[i]));
	// }
	// console.log(detail);

	// $scope.Items = detail;
	// console.log(detail);
	// // $scope.Items = rawItems.slice(0, 99);

	// $scope.search = function(item) {
	// 	//GW.getItemDetails();
	// }
}