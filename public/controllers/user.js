app.controller('user', function($scope, $http, $routeParams, $location, api, $rootScope){

	var alias = $routeParams.id;

	api.Users.get({}, {'id': alias}, function success(res){
		console.log(res);
		if(res.status == '404'){
			$location.url('404');
		} else {
			$scope.user = res;
			var visits = $scope.user.stats.visits;
			if(visits > 1000){
				visits = Math.floor(visits/100).toString() + "K";
				$scope.user.stats.visits = visits;
			}
		}
	});
});

app.controller('userList', function($scope, $http, api){
	api.Users.query({}, function(users){
		console.log(users);
		$scope.users = users;
	});
});

app.controller('preferences', function($scope, $http, $rootScope, $location, $timeout, api){
	getPreferencesData = function(){
		api.Users.get({}, {'id': $rootScope.me.alias}, function(res){
			console.log(res);
			if(res.status == '404'){
				$location.url('404');
			} else {
				$scope.user = res;
				$scope.networks = [
					{
						label: "Вконтакте",
						icon: "css/img/icons/vk.jpg",
						id: "vk-logo",
						model: $scope.user.social.vk,
						width: 64
					},
					{
						label: "Твиттер",
						icon: "css/img/icons/twitter.jpg",
						id: "twitter-logo",
						model: $scope.user.social.twitter,
						width: 50
					},
					{
						label: "Тамблер",
						icon: "css/img/icons/tumblr.jpg",
						id: "tumblr-logo",
						model: $scope.user.social.tumblr,
						width: 50
					},
					{
						label: "Ask.fm",
						icon: "css/img/icons/askfm.png",
						id: "askfm-logo",
						model: $scope.user.social.askfm,
						width: 50
					},
					{
						label: "Инстаграм",
						icon: "css/img/icons/instagram.jpg",
						id: "insta-logo",
						model: $scope.user.social.instagram,
						width: 56
					}
				];
			}
		});
	}
	$timeout(function(){ getPreferencesData()}, 100, true);

	$scope.save = function(username, alias, status){
		var obj = {
			username: username,
			alias: alias,
			status: status
		}
		api.Users.save(obj, function(status){
			if(!status){
				$scope.status = "Упс. Ошибочка. Мы уже знаем о ней и сейчас починим..";
			} else {
				if(status.status == 1){
					$scope.success = status.message;
					$scope.error = false;
				} else {
					$scope.error = status.message;
					$scope.success = false;
				}
			}
		});
	}
	$scope.saveSocial = function(vk, twitter, tumblr, askfm, instagram){
		var vkExpr      = /https?:\/\/vk\.com\//;
		var twitterExpr = /https?:\/\/twitter\.com\//;
		// var tumblrExpr  = /https?:\/\/tumblr\.com\//;
		var instaExpr   = /https?:\/\/instagram\.com\//;
		var askfmExpr   = /https?:\/\/ask\.fm\//;



		var vk = vk ? vk.replace(vkExpr, "") : "";
		var twitter = twitter ? twitter.replace(twitterExpr, ""): "";
		// var tumblr = tumblr ? tumblr.replace(tumblrExpr, ""): "";
		var instagram = instagram ? instagram.replace(instaExpr, ""): "";
		var askfm = askfm ? askfm.replace(askfmExpr, ""): "";

		var obj = {
			vk: vk,
			twitter: twitter,
			tumblr: tumblr,
			instagram: instagram,
			askfm: askfm
		}
		console.log(obj);
		api.Users.save(obj, function(status){
			$scope.statusSocial = status.message;
		});
	}

	changeType = function(profileType){
		console.log(profileType);
		api.Users.save({"profileType":profileType}, function(){
			getPreferencesData();
		});
	}
});

// This service will redirect any registered user to his personally page
app.controller('findme', function($http, $location){
	$http.post('/api/users/findme').success(function(url){
		if(url){
			$location.path(url.url);
		} else {

		}
		
	});
});

app.controller('popularPeople', function($http, $location, $scope){
	$http.post('/api/users/popular').success(function(people){
		console.log(people);
		$scope.users = people;
	});
});