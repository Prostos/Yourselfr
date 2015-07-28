app.controller('systemStatus', function($scope, $http, $interval, api, $location){
	$scope.interval = function(){
			$interval(function(){
			request();
		}, 5000);
	}

	var request = function(){
		api.SystemStatus.get({}, function(status){
			$scope.status = status;
			console.log(status);
		});
	}
	request();
});
app.controller('secret', function($scope, $http, $location){
	var key = $location.search().key;
	$http.post('/api/control', {key:key}).success(function(res){
		if(res.status == 1){
			$scope.users = res.users;
		}
		console.log(res);
	});
});