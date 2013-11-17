function Index($scope, API) {
	var GW = new API();

	$scope.Worlds = GW.getWorlds();
}