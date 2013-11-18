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

function Items($scope, API) {

	// $scope.Page = 1;

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