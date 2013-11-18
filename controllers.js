function Index($scope, API) {
	// var GW = new API();

	$scope.Worlds = API.getWorlds();

	console.log(API.Maps.getContinents());
}

function Worlds($scope, API) {
	var GW = new API();
}

function Events($scope, API) {
	var GW = new API();

	function Foo() {

	};

	Foo.Events = function(){};

	Foo.Events.bar = function() {
		return "works!";
	}

	console.log(Foo.Events.bar());

	// function Foo() {

	// 	Foo.bar = function() {
	// 		return "works!"
	// 	}
	// 	return {
	// 		bar: bar
	// 	};
	// }

}

function Items($scope, API) {
	var GW = new API();

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