var app = angular.module('app', ['ngRoute', 'ngResource', 'angularMoment', 'ngMaterial', 'ngFileUpload', 'ngMdIcons']).run(function($rootScope, $http, $location){
	$rootScope.authenticated = false;


	$http.get('/auth').success(function(user){
		var url = $location.path().substr(1);
		var path;
		if(user !== '0'){
			$rootScope.me = user;
			$rootScope.authenticated = true;
			var userAlias = user.alias;
		} else {
			$rootScope.authenticated = false;
		}
		$rootScope.$watch(function() {
			return $location.path();
		}, function(){
			var url = $location.path().substr(1);
			var path;

			if(userAlias){
				if(url == userAlias){
					$rootScope.yourPage = true;
					$rootScope.logoutButton = true;
				} else if(url == 'preferences'){
					// Show logout button when user is on his(her) page or in preferences.
					$rootScope.logoutButton = true;
				}
				else {
					$rootScope.yourPage = false;
					$rootScope.logoutButton = false;
				}
			}
			// If you are not authorized —— login && register && '' page are always ready for you.
			// If you are authorized —— these pages will redirect you to feed page
			if(url == 'login' || url == 'signup' || url == ''){
				// Make container's WIDTH MORE Tight;
				$rootScope.defaultContainer = false;


				if($rootScope.authenticated == true) 
					path = 'feed';
			} else if(url == 'feed' || url == 'preferences' || url == 'moderation'){
				$rootScope.defaultContainer = true;
				if($rootScope.authenticated == false) 
					path = 'login';
			} else {
				$rootScope.defaultContainer = true;
			}
			if(path){
				$location.url('/'+path);
			} 
			console.log($rootScope.defaultContainer);
		});
	});

	$rootScope.logout = function(){
		console.log("logging out...");
		$rootScope.authenticated = false;
		$rootScope.username = undefined;
		$rootScope.alias = undefined;
		$rootScope.user_ids = undefined;
		$http.get('auth/logout');
		setTimeout(function(){
			window.location.reload();
		}, 100);
		
	}
});

app.directive('ngEnter', function () {
	return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
			if(event.which === 13) {
				scope.$apply(function (){
					scope.$eval(attrs.ngEnter);
				});
				event.preventDefault();
			}
		});
	};
});

app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider',
	function($routeProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
		// Theming
		$mdThemingProvider.definePalette('amazingPaletteName', {
			'50': 'ffebee',
			'100': 'ffcdd2',
			'200': 'ef9a9a',
			'300': 'e57373',
			'400': 'ef5350',
			'500': '148BC3', // Input forms
			'600': 'e53935',
			'700': 'd32f2f',
			'800': 'c62828',
			'900': 'b71c1c',
			'A100': 'ff8a80',
			'A200': 'ff5252',
			'A400': 'ff1744',
			'A700': 'd50000',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
												// on this palette should be dark or light
			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
			 '200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		  });
		  $mdThemingProvider.theme('default')
			.primaryPalette('amazingPaletteName')



		$locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when('/', {
				templateUrl: 'introduction.html'
			})
			.when('/login', {
				templateUrl: 'forms/login.html',
				controller: 'auth',
			})
			.when('/signup', {
				templateUrl: 'forms/signup.html',
				controller: 'auth'
			})
			.when('/auth/success', {
				templateUrl: 'auth_success.html',
				controller: ''
			})
			.when('/blocked', {
				templateUrl: 'blocked.html'
			})
			.when('/feed', {
				templateUrl: 'feed.html',
			})
			.when('/moderation', {
				templateUrl: 'moderation.html'
			})
			.when('/preferences', {
				templateUrl: 'preferences.html'
			})
			.when('/followers/:id', {
				templateUrl: 'followers.html'
			})
			.when('/following/:id', {
				templateUrl: 'following.html'
			})
			.when('/dev', {
				templateUrl: 'status.html',
				controller: 'systemStatus'
			})
			.when('/dev/updates', {
				templateUrl: 'updates.html'
			})
			.when('/404', {
				templateUrl: '404.html'
			})
			.when('/about', {
				templateUrl: 'about.html',
				controller: 'stats'
			})
			.when('/about/proof', {
				templateUrl: 'proof.html'
			})
			.when('/about/phylosoply', {
				templateUrl: 'phylosoply.html'
			})
			.when('/:id', {
				templateUrl: 'user.html',
				controller: 'user'
			})
			.otherwise({
				redirectTo: '/'
			});
}]);

app.controller('timeCtrl', function(){
	var vm = this;
	moment.locale('ru');
	vm.time = moment(new Date());
});

app.controller('navbar', function($scope, $location){
	$scope.menuOpen = false;
	$scope.goPreferences = function(){
		$location.path('preferences');
	}
});


app.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
app.filter('emoji', function($sce){

	return function(text){
		var emoji = {
			1:  {title: ':-)', source: "D83DDE0A"}, //0
			2:  {title: ':-D', source: "D83DDE03"}, //1
			3:  {title: ';-)', source: "D83DDE09"}, //2
			4:  {title: 'xD',  source: "D83DDE06"}, //3
			5:  {title: ';-P', source: "D83DDE1C"}, //4
			6:  {title: ':-p', source: "D83DDE0B"}, //5
			7:  {title: '8-)', source: "D83DDE0D"}, //6
			8:  {title: 'B-)', source: "D83DDE0E"}, //7
			9:  {title: ':-(', source: "D83DDE12"}, //8
			10: {title: ';-]', source: "D83DDE0F"}, //9
			11: {title: '3(',  source: "D83DDE14"},
			12: {title: ":'(", source: "D83DDE22"},
			13: {title: ':_(', source: "D83DDE2D"},
			14: {title: ':((', source: "D83DDE29"},
			15: {title: ':o',  source: "D83DDE28"},
			16: {title: ':|',  source: "D83DDE10"},
			17: {title: '3-)',  source: "D83DDE0C"},
			18: {title: 'O:)',  source: "D83DDE07"},
			19: {title: '8|',  source: "D83DDE33"},
			20: {title: '<3',  source: "2764"},
			21: {title: ':<3',  source: "D83DDE18"},
			22: {title: ':))',  source: "D83DDE02"},
			23: {title: ';o',  source: "D83DDE30"},
			24: {title: ':-]',  source: "263A"},
			25: {title: '}:)',  source: "D83DDE08"},
			26: {title: ':like:',  source: "D83DDC4D"},
			27: {title: ':dislike:',  source: "D83DDC4E"},
			28: {title: ':applouse:',  source: "D83DDC4F"},
			29: {title: ':shit:',  source: "D83DDCA9"},
			30: {title: ':kappa:', source: "kappa"},
			31: {title: ':moon:', source: "D83CDF1D"}
		}
		String.prototype.replaceAll = function(search, replace){
		  return this.split(search).join(replace);
		}
		for(var i=1; i<=31; i++){
			text = text.replaceAll(emoji[i].title, "<img src='images/emoji/"+ emoji[i].source +".png' width='20'>");
		}
		
		return $sce.trustAsHtml(text);
	}
});

app.factory('api', ['$resource',
	function($resource) {
		return {
			Posts:         $resource('/api/posts/:id', {id: '@id'}),
			Feed:          $resource('/api/posts/feed/'),
			Users:         $resource('/api/users/:id', {id: '@id'}),
			Likes:         $resource('/api/likes/:id', {id: '@id'}),
			Subscriptions:{
				GetStatus: $resource('/api/subscriptions/status/:id', {id: '@id'}),
				Follow:    $resource('/api/subscriptions/follow/:id', {id: '@id'}),
				Followers: $resource('/api/subscriptions/followers/:id', {id: '@id'}),
				Following: $resource('/api/subscriptions/following/:id', {id: '@id'}),
			},
			Moderation:    $resource('/api/posts/moderation'),
			SystemStatus:  $resource('/api/statistics')
		};
}]);



app.controller('imageUpload', function ($scope, Upload, $http, $mdToast) {
	$scope.$watch('avatar', function () {
		$scope.upload($scope.avatar, 'avatar');
	});
	$scope.$watch('header', function () {
		$scope.upload($scope.header, 'header');
	});
	$scope.loading = false;

	$scope.upload = function (files, path) {
		if (files && files.length) {
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				console.log(file);
				Upload.upload({
					url: 'upload/' + path,
					file: file
				}).progress(function (evt) {
					$scope.loading = true;
				}).success(function (data, status, headers, config) {
					$scope.showToast(data.message);
					$scope.loading = false;
					$scope.status = data;
				}).error(function (data, status, headers, config) {
					console.log('error status: ' + status);
				})
			}
		}
	};
	$scope.deleteAvatar = function(){
		$http.post('/upload/avatar/delete').success(function(res){
			$scope.avatarMessage = res.message;
		});
	}
	$scope.deleteHeader = function(){
		$http.post('/upload/header/delete').success(function(res){
			$scope.headerMessage = res.message;
		});
	}

	$scope.showToast = function(text) {
		$mdToast.show({
			position: "bottom left",
			template: "<md-toast>"+ text +"</md-toast>"
		});
	}

});