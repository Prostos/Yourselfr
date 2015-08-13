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
app.controller('secret', function($scope, $http, $location, $mdToast){
	var key = $location.search().key;
	if(key){
		$scope.devMode = true;
	}
	function getUsers(){
		$http.post('/api/control', {key:key}).success(function(res){
			if(res.status == 1){
				$scope.users = res.users;
			}
			console.log(res);
		});
	}
	getUsers();
	


	$scope.countFollowersAndFollowing = function(){
		$http.post('/api/control/count-followers-following', {key:key}).success(function(res){
			toast(res.message);
		});
	}
	$scope.countUnpublishedPosts = function(){
		$http.post('/api/control/count-unpublished-posts', {key:key}).success(function(res){
			toast(res.message);
		});
	}
	$scope.banUser = function(userID){
		$http.post('/api/control/ban/user', {key:key, userID: userID, reason:"no reason"}).success(function(res){
			toast(res.message);
		});
	}
	$scope.deleteUser = function(userID){
		$http.post('/api/control/delete/user', {key:key, userID: userID}).success(function(res){
			toast(res.message);
			getUsers();
		});
	}
	$scope.recountPosts = function(){
		$http.post('/api/control/recount-posts', {key: key}).success(function(res){
			toast(res.message);
		});
	}
});