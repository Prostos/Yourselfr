app.controller('subscriptions', function($scope, $http, api, $mdDialog, $mdToast, $rootScope, $location){
	$scope.follow = function(following){
		// following id. user id
		api.Subscriptions.Follow.save({following: following}, function(res){
			var status = res.status;
			var message = res.message;	

			if(status == -1){
				showAlert();
			} else if(status == 1){
				toast('Подписка успешно оформлена.');
				$scope.user.stats.followers += 1;
			} else {
				console.log(status);
				toast('Подписка успешно отменена.');
				$scope.user.stats.followers -= 1;
			}

			if(status == 1 || status == 2){
				$scope.getStatus();
			}
			function showAlert() {
				alert = $mdDialog.alert({
					title: 'Оформление подписки',
					content: 'Зарегистрируйстесь или войдите.',
					ok: 'Закрыть',
					clickOutsideToClose: true
				});
				$mdDialog
					.show( alert )
					.finally(function() {
					  alert = undefined;
					});
			}
		});
	}
	$scope.getStatus = function(){
		var alias = $location.path().substr(1);
		console.log(alias);
		if($rootScope.authenticated == false){
			$scope.subStatus = false;
		} else {
			api.Subscriptions.GetStatus.get({}, {'id':alias}, function(status){
				console.log(status);
				$scope.subStatus = status.status;
			});
		}
	}

	$scope.getFollowers = function(){
		var alias = $location.path().substr(1).split('/')[1];
		console.log(alias);
		api.Subscriptions.Followers.get({alias:alias}, function(res){
			var status = res.status;
			if(status == 0){
				$location.path('/404');
			} else {
				if(status == 2){
					$scope.noFollowers = true;
				} else {
					$scope.noFollowers = false;
				}
				if(status == 1){
					$scope.followers = res.followers;
				}
				$scope.user = res.user;
			}
			
			console.log(res);
		});
	}

	$scope.getFollowing = function(){
		var alias = $location.path().substr(1).split('/')[1];
		console.log(alias);
		api.Subscriptions.Following.get({alias:alias}, function(res){
			var status = res.status;
			if(status == 0){
				$location.path('/404');
			} else {
				if(status == 2){
					$scope.noFollowing = true;
				} else {
					$scope.noFollowing = false;
				}
				if(status == 1){
					$scope.followings = res.followings;
				}
				$scope.user = res.user;
			}
			
			console.log(res);
		});
	}
});