app.controller('likes', function($scope, $http, api){
	$scope.like = function(object){
		var object = object;

		api.Likes.save({object: object}, function(res){
			console.log(res);
			$scope.like = res;
			$scope.showLikes = true;
		});
	}
});