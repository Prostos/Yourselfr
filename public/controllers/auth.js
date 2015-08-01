app.controller('auth', function($scope, $http, $rootScope, $location, $timeout){
	$scope.user = {};
	$scope.tryAuth = false;
	function authStatus(){
		if($scope.tryAuth == false){
			$scope.tryAuth = true;
		} else {
			$timeout(function() {$scope.tryAuth = false }, 300);
		}
	}


	// Login via API.
	$scope.authorize = function(){
		if(!$scope.user.username){
			$scope.error = "Введите логин";
		} else if (!$scope.user.password){
			$scope.error = "Вы забыли ввести пароль";
		} else {
			authStatus();
			$http.post('auth/login', $scope.user).success(function(data){
				authStatus();
				console.log(data);
				if(data.state == 'failure'){
					$scope.error = data.message;
					$scope.user.password = '';
					areaError(".forms", 200);
				} else {
					$scope.error = false;
					$scope.success = data.message;
						
					$rootScope.authenticated = true;
					$rootScope.yourPage = true;

					$rootScope.me = {
						username: data.user.username,
						alias: data.user.alias,
						user_ids: data.user._id,
					}
					$timeout(function(){ window.location = data.user.alias}, 1000);
				}
			});
		}
	}
	// Auth via VK.COM
	$scope.authVK = function(){
		$http.get('auth/vk').success(function(callback){
			console.log(callback);
		});
	}



	// Registration via API.
	$scope.firstStep = function(){
		$scope.firstLayout = true;
		$scope.secondLayout = false;
	}
	$scope.secondStep = function(){
		$scope.firstLayout = false;
		$scope.secondLayout = true;
	}
	$scope.register = function(skipEmail){
		var passRegExp = new RegExp('^[1-9a-zA-Z]{1,}$');
		console.log(skipEmail);

		console.log($scope.user);
		if(!$scope.user.username)
			return $scope.error = "Введите логин";
		if (!$scope.user.password)
			return $scope.error = "Вы забыли ввести пароль";
		if ($scope.user.password.length < 6)
			return $scope.error = "Пароль должен содержать не менее 6 символов.";
		if (!passRegExp.test($scope.user.password)){
			return $scope.error = "Пароль может содержать только латинские буквы, цифры и символы.";
		} else {
			if($scope.step == 1){
				return $scope.step = 2;
			} else if($scope.step == 2){
				var finish = function(){
					$http.post('auth/signup', $scope.user).success(function(user){
						window.location.href = '/';
					}).error(function(data){
						console.log("Thats an error!");
						console.log(data);
					});
				}
				if(skipEmail == false){
					// Check if email's here.
					if($scope.user.email){
						console.log($scope.user.email);
						finish();
					} else {
						$scope.error = "Что-то не так с вашим э-мейл адресом."
					}
				} else {
					// Finish registration
					finish();
				}
			}
		}
	}
});