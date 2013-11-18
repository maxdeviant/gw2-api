function Index($scope, API) {
	$scope.Worlds = API.getWorlds();
}

function Events($scope, API) {
	$scope.Events = API.Events.getEvents($('#world-list').val());
	console.log($scope.Events);
}

function WvW($scope, API) {
	$scope.Matches = API.WvW.getMatches().wvw_matches;

	// console.log($scope.Matches);
}

function WvWMatches($scope, $routeParams, API, API_Util) {
	var match_id = $routeParams.match_id;
	var matches = API.WvW.getMatches().wvw_matches;

	for (var i = 0; i < matches.length; i++) {
		if (matches[i]['wvw_match_id'] === match_id) {
			$scope.Match = matches[i];
			$scope.MatchDetails = API.WvW.getMatchDetails(match_id);

			$scope.Worlds = {
				Blue: API_Util.getWorldName(matches[i]['blue_world_id']),
				Green: API_Util.getWorldName(matches[i]['green_world_id']),
				Red: API_Util.getWorldName(matches[i]['red_world_id'])
			};
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