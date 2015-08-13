app.controller('likes', function($scope, $http, api){
	$scope.showLikes = false;
	$scope.like = function(object){
		var object = object;

		api.Likes.save({object: object}, function(res){
			console.log(res.now.toString());
			$scope.likesNow = res.now.toString();
			console.log(res.now);

			$scope.post.isLiked = !$scope.post.isLiked;
			$scope.showLikes = !$scope.showLikes;

			console.log($scope.showLikes);

		});
	}
});